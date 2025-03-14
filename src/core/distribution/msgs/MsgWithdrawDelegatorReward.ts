import { JSONSerializable } from '../../../util/json'
import { AccAddress, ValAddress } from '../../bech32'
import { Any } from '@initia/initia.proto/google/protobuf/any'
import { MsgWithdrawDelegatorReward as MsgWithdrawDelegatorReward_pb } from '@initia/initia.proto/cosmos/distribution/v1beta1/tx'

/**
 * MsgWithdrawDelegatorReward defines a method to withdraw rewards of delegator from a single validator.
 */
export class MsgWithdrawDelegatorReward extends JSONSerializable<
  MsgWithdrawDelegatorReward.Amino,
  MsgWithdrawDelegatorReward.Data,
  MsgWithdrawDelegatorReward.Proto
> {
  /**
   * @param delegator_address delegator's account address
   * @param validator_address validator's operator address
   */
  constructor(
    public delegator_address: AccAddress,
    public validator_address: ValAddress
  ) {
    super()
  }

  public static fromAmino(
    data: MsgWithdrawDelegatorReward.Amino
  ): MsgWithdrawDelegatorReward {
    const {
      value: { delegator_address, validator_address },
    } = data
    return new MsgWithdrawDelegatorReward(delegator_address, validator_address)
  }

  public toAmino(): MsgWithdrawDelegatorReward.Amino {
    const { delegator_address, validator_address } = this
    return {
      type: 'cosmos-sdk/MsgWithdrawDelegationReward',
      value: {
        delegator_address,
        validator_address,
      },
    }
  }

  public static fromData(
    proto: MsgWithdrawDelegatorReward.Data
  ): MsgWithdrawDelegatorReward {
    const { delegator_address, validator_address } = proto
    return new MsgWithdrawDelegatorReward(delegator_address, validator_address)
  }

  public toData(): MsgWithdrawDelegatorReward.Data {
    const { delegator_address, validator_address } = this
    return {
      '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      delegator_address,
      validator_address,
    }
  }

  public static fromProto(
    proto: MsgWithdrawDelegatorReward.Proto
  ): MsgWithdrawDelegatorReward {
    return new MsgWithdrawDelegatorReward(
      proto.delegatorAddress,
      proto.validatorAddress
    )
  }

  public toProto(): MsgWithdrawDelegatorReward.Proto {
    const { delegator_address, validator_address } = this
    return MsgWithdrawDelegatorReward_pb.fromPartial({
      delegatorAddress: delegator_address,
      validatorAddress: validator_address,
    })
  }

  public packAny(): Any {
    return Any.fromPartial({
      typeUrl: '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
      value: MsgWithdrawDelegatorReward_pb.encode(this.toProto()).finish(),
    })
  }

  public static unpackAny(msgAny: Any): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.fromProto(
      MsgWithdrawDelegatorReward_pb.decode(msgAny.value)
    )
  }
}

export namespace MsgWithdrawDelegatorReward {
  export interface Amino {
    type: 'cosmos-sdk/MsgWithdrawDelegationReward'
    value: {
      delegator_address: AccAddress
      validator_address: ValAddress
    }
  }

  export interface Data {
    '@type': '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward'
    delegator_address: AccAddress
    validator_address: ValAddress
  }

  export type Proto = MsgWithdrawDelegatorReward_pb
}
