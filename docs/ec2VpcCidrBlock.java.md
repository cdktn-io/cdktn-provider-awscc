# `ec2VpcCidrBlock` Submodule <a name="`ec2VpcCidrBlock` Submodule" id="@cdktn/provider-awscc.ec2VpcCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcCidrBlock <a name="Ec2VpcCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlock;

Ec2VpcCidrBlock.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .amazonProvidedIpv6CidrBlock(java.lang.Boolean|IResolvable)
//  .cidrBlock(java.lang.String)
//  .ipv4IpamPoolId(java.lang.String)
//  .ipv4NetmaskLength(java.lang.Number)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6CidrBlockNetworkBorderGroup(java.lang.String)
//  .ipv6IpamPoolId(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .ipv6Pool(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>java.lang.Number</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6Pool">ipv6Pool</a></code> | <code>java.lang.String</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `amazonProvidedIpv6CidrBlock`<sup>Optional</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.amazonProvidedIpv6CidrBlock"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.cidrBlock"></a>

- *Type:* java.lang.String

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* java.lang.String

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4NetmaskLength"></a>

- *Type:* java.lang.Number

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* java.lang.String

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup"></a>

- *Type:* java.lang.String

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* java.lang.String

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* java.lang.Number

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `ipv6Pool`<sup>Optional</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6Pool"></a>

- *Type:* java.lang.String

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock">resetAmazonProvidedIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId">resetIpv4IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength">resetIpv4NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup">resetIpv6CidrBlockNetworkBorderGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId">resetIpv6IpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength">resetIpv6NetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool">resetIpv6Pool</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAmazonProvidedIpv6CidrBlock` <a name="resetAmazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock"></a>

```java
public void resetAmazonProvidedIpv6CidrBlock()
```

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock"></a>

```java
public void resetCidrBlock()
```

##### `resetIpv4IpamPoolId` <a name="resetIpv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId"></a>

```java
public void resetIpv4IpamPoolId()
```

##### `resetIpv4NetmaskLength` <a name="resetIpv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength"></a>

```java
public void resetIpv4NetmaskLength()
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock"></a>

```java
public void resetIpv6CidrBlock()
```

##### `resetIpv6CidrBlockNetworkBorderGroup` <a name="resetIpv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup"></a>

```java
public void resetIpv6CidrBlockNetworkBorderGroup()
```

##### `resetIpv6IpamPoolId` <a name="resetIpv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId"></a>

```java
public void resetIpv6IpamPoolId()
```

##### `resetIpv6NetmaskLength` <a name="resetIpv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength"></a>

```java
public void resetIpv6NetmaskLength()
```

##### `resetIpv6Pool` <a name="resetIpv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool"></a>

```java
public void resetIpv6Pool()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlock;

Ec2VpcCidrBlock.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlock;

Ec2VpcCidrBlock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlock;

Ec2VpcCidrBlock.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlock;

Ec2VpcCidrBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcCidrBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcCidrBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource">ipSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute">ipv6AddressAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId">vpcCidrBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput">amazonProvidedIpv6CidrBlockInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput">cidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput">ipv4IpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput">ipv4NetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6CidrBlockNetworkBorderGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput">ipv6IpamPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput">ipv6NetmaskLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput">ipv6PoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool">ipv6Pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSource`<sup>Required</sup> <a name="ipSource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource"></a>

```java
public java.lang.String getIpSource();
```

- *Type:* java.lang.String

---

##### `ipv6AddressAttribute`<sup>Required</sup> <a name="ipv6AddressAttribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute"></a>

```java
public java.lang.String getIpv6AddressAttribute();
```

- *Type:* java.lang.String

---

##### `vpcCidrBlockId`<sup>Required</sup> <a name="vpcCidrBlockId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId"></a>

```java
public java.lang.String getVpcCidrBlockId();
```

- *Type:* java.lang.String

---

##### `amazonProvidedIpv6CidrBlockInput`<sup>Optional</sup> <a name="amazonProvidedIpv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput"></a>

```java
public java.lang.Boolean|IResolvable getAmazonProvidedIpv6CidrBlockInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput"></a>

```java
public java.lang.String getCidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv4IpamPoolIdInput`<sup>Optional</sup> <a name="ipv4IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput"></a>

```java
public java.lang.String getIpv4IpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4NetmaskLengthInput`<sup>Optional</sup> <a name="ipv4NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput"></a>

```java
public java.lang.Number getIpv4NetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput"></a>

```java
public java.lang.String getIpv6CidrBlockInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockNetworkBorderGroupInput`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroupInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroupInput();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolIdInput`<sup>Optional</sup> <a name="ipv6IpamPoolIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput"></a>

```java
public java.lang.String getIpv6IpamPoolIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLengthInput`<sup>Optional</sup> <a name="ipv6NetmaskLengthInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput"></a>

```java
public java.lang.Number getIpv6NetmaskLengthInput();
```

- *Type:* java.lang.Number

---

##### `ipv6PoolInput`<sup>Optional</sup> <a name="ipv6PoolInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput"></a>

```java
public java.lang.String getIpv6PoolInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `amazonProvidedIpv6CidrBlock`<sup>Required</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock"></a>

```java
public java.lang.Boolean|IResolvable getAmazonProvidedIpv6CidrBlock();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId"></a>

```java
public java.lang.String getIpv4IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength"></a>

```java
public java.lang.Number getIpv4NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroup();
```

- *Type:* java.lang.String

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

---

##### `ipv6Pool`<sup>Required</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool"></a>

```java
public java.lang.String getIpv6Pool();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcCidrBlockConfig <a name="Ec2VpcCidrBlockConfig" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_cidr_block.Ec2VpcCidrBlockConfig;

Ec2VpcCidrBlockConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .vpcId(java.lang.String)
//  .amazonProvidedIpv6CidrBlock(java.lang.Boolean|IResolvable)
//  .cidrBlock(java.lang.String)
//  .ipv4IpamPoolId(java.lang.String)
//  .ipv4NetmaskLength(java.lang.Number)
//  .ipv6CidrBlock(java.lang.String)
//  .ipv6CidrBlockNetworkBorderGroup(java.lang.String)
//  .ipv6IpamPoolId(java.lang.String)
//  .ipv6NetmaskLength(java.lang.Number)
//  .ipv6Pool(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock">cidrBlock</a></code> | <code>java.lang.String</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>java.lang.Number</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>java.lang.String</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>java.lang.String</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>java.lang.Number</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool">ipv6Pool</a></code> | <code>java.lang.String</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `amazonProvidedIpv6CidrBlock`<sup>Optional</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock"></a>

```java
public java.lang.Boolean|IResolvable getAmazonProvidedIpv6CidrBlock();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock"></a>

```java
public java.lang.String getCidrBlock();
```

- *Type:* java.lang.String

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `ipv4IpamPoolId`<sup>Optional</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId"></a>

```java
public java.lang.String getIpv4IpamPoolId();
```

- *Type:* java.lang.String

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `ipv4NetmaskLength`<sup>Optional</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength"></a>

```java
public java.lang.Number getIpv4NetmaskLength();
```

- *Type:* java.lang.Number

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Optional</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```java
public java.lang.String getIpv6CidrBlockNetworkBorderGroup();
```

- *Type:* java.lang.String

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `ipv6IpamPoolId`<sup>Optional</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId"></a>

```java
public java.lang.String getIpv6IpamPoolId();
```

- *Type:* java.lang.String

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6NetmaskLength`<sup>Optional</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength"></a>

```java
public java.lang.Number getIpv6NetmaskLength();
```

- *Type:* java.lang.Number

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `ipv6Pool`<sup>Optional</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool"></a>

```java
public java.lang.String getIpv6Pool();
```

- *Type:* java.lang.String

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---



