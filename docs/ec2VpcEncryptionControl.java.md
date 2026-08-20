# `ec2VpcEncryptionControl` Submodule <a name="`ec2VpcEncryptionControl` Submodule" id="@cdktn/provider-awscc.ec2VpcEncryptionControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEncryptionControl <a name="Ec2VpcEncryptionControl" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control awscc_ec2_vpc_encryption_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControl;

Ec2VpcEncryptionControl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .egressOnlyInternetGatewayExclusionInput(java.lang.String)
//  .elasticFileSystemExclusionInput(java.lang.String)
//  .internetGatewayExclusionInput(java.lang.String)
//  .lambdaExclusionInput(java.lang.String)
//  .mode(java.lang.String)
//  .natGatewayExclusionInput(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2VpcEncryptionControlTags>)
//  .virtualPrivateGatewayExclusionInput(java.lang.String)
//  .vpcId(java.lang.String)
//  .vpcLatticeExclusionInput(java.lang.String)
//  .vpcPeeringExclusionInput(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable EIGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable EFS exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable IGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Lambda exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | The VPC encryption control mode, either monitor or enforce. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Nat gateway exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>></code> | The tags to assign to the VPC encryption control. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable VGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The VPC on which this VPC encryption control is applied. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Vpc Lattice exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable VPC peering exclusion. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.egressOnlyInternetGatewayExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable EIGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input Ec2VpcEncryptionControl#egress_only_internet_gateway_exclusion_input}

---

##### `elasticFileSystemExclusionInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.elasticFileSystemExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable EFS exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input Ec2VpcEncryptionControl#elastic_file_system_exclusion_input}

---

##### `internetGatewayExclusionInput`<sup>Optional</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.internetGatewayExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable IGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input Ec2VpcEncryptionControl#internet_gateway_exclusion_input}

---

##### `lambdaExclusionInput`<sup>Optional</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.lambdaExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable Lambda exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input Ec2VpcEncryptionControl#lambda_exclusion_input}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

The VPC encryption control mode, either monitor or enforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#mode Ec2VpcEncryptionControl#mode}

---

##### `natGatewayExclusionInput`<sup>Optional</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.natGatewayExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable Nat gateway exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input Ec2VpcEncryptionControl#nat_gateway_exclusion_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>>

The tags to assign to the VPC encryption control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#tags Ec2VpcEncryptionControl#tags}

---

##### `virtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.virtualPrivateGatewayExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable VGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input Ec2VpcEncryptionControl#virtual_private_gateway_exclusion_input}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcId"></a>

- *Type:* java.lang.String

The VPC on which this VPC encryption control is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_id Ec2VpcEncryptionControl#vpc_id}

---

##### `vpcLatticeExclusionInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcLatticeExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable Vpc Lattice exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input Ec2VpcEncryptionControl#vpc_lattice_exclusion_input}

---

##### `vpcPeeringExclusionInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.Initializer.parameter.vpcPeeringExclusionInput"></a>

- *Type:* java.lang.String

Used to enable or disable VPC peering exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input Ec2VpcEncryptionControl#vpc_peering_exclusion_input}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput">resetEgressOnlyInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput">resetElasticFileSystemExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput">resetInternetGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput">resetLambdaExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput">resetNatGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput">resetVirtualPrivateGatewayExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput">resetVpcLatticeExclusionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput">resetVpcPeeringExclusionInput</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2VpcEncryptionControlTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>>

---

##### `resetEgressOnlyInternetGatewayExclusionInput` <a name="resetEgressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetEgressOnlyInternetGatewayExclusionInput"></a>

```java
public void resetEgressOnlyInternetGatewayExclusionInput()
```

##### `resetElasticFileSystemExclusionInput` <a name="resetElasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetElasticFileSystemExclusionInput"></a>

```java
public void resetElasticFileSystemExclusionInput()
```

##### `resetInternetGatewayExclusionInput` <a name="resetInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetInternetGatewayExclusionInput"></a>

```java
public void resetInternetGatewayExclusionInput()
```

##### `resetLambdaExclusionInput` <a name="resetLambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetLambdaExclusionInput"></a>

```java
public void resetLambdaExclusionInput()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetMode"></a>

```java
public void resetMode()
```

##### `resetNatGatewayExclusionInput` <a name="resetNatGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetNatGatewayExclusionInput"></a>

```java
public void resetNatGatewayExclusionInput()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetTags"></a>

```java
public void resetTags()
```

##### `resetVirtualPrivateGatewayExclusionInput` <a name="resetVirtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVirtualPrivateGatewayExclusionInput"></a>

```java
public void resetVirtualPrivateGatewayExclusionInput()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcId"></a>

```java
public void resetVpcId()
```

##### `resetVpcLatticeExclusionInput` <a name="resetVpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcLatticeExclusionInput"></a>

```java
public void resetVpcLatticeExclusionInput()
```

##### `resetVpcPeeringExclusionInput` <a name="resetVpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.resetVpcPeeringExclusionInput"></a>

```java
public void resetVpcPeeringExclusionInput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControl;

Ec2VpcEncryptionControl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControl;

Ec2VpcEncryptionControl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControl;

Ec2VpcEncryptionControl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControl;

Ec2VpcEncryptionControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcEncryptionControl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcEncryptionControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcEncryptionControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcEncryptionControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEncryptionControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions">resourceExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId">vpcEncryptionControlId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput">egressOnlyInternetGatewayExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput">elasticFileSystemExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput">internetGatewayExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput">lambdaExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput">natGatewayExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput">virtualPrivateGatewayExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput">vpcLatticeExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput">vpcPeeringExclusionInputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceExclusions`<sup>Required</sup> <a name="resourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.resourceExclusions"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsOutputReference getResourceExclusions();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference">Ec2VpcEncryptionControlResourceExclusionsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tags"></a>

```java
public Ec2VpcEncryptionControlTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList">Ec2VpcEncryptionControlTagsList</a>

---

##### `vpcEncryptionControlId`<sup>Required</sup> <a name="vpcEncryptionControlId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcEncryptionControlId"></a>

```java
public java.lang.String getVpcEncryptionControlId();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGatewayExclusionInputInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInputInput"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `elasticFileSystemExclusionInputInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInputInput"></a>

```java
public java.lang.String getElasticFileSystemExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `internetGatewayExclusionInputInput`<sup>Optional</sup> <a name="internetGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInputInput"></a>

```java
public java.lang.String getInternetGatewayExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `lambdaExclusionInputInput`<sup>Optional</sup> <a name="lambdaExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInputInput"></a>

```java
public java.lang.String getLambdaExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `natGatewayExclusionInputInput`<sup>Optional</sup> <a name="natGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInputInput"></a>

```java
public java.lang.String getNatGatewayExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2VpcEncryptionControlTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>>

---

##### `virtualPrivateGatewayExclusionInputInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInputInput"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `vpcLatticeExclusionInputInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInputInput"></a>

```java
public java.lang.String getVpcLatticeExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringExclusionInputInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInputInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInputInput"></a>

```java
public java.lang.String getVpcPeeringExclusionInputInput();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Required</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.egressOnlyInternetGatewayExclusionInput"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `elasticFileSystemExclusionInput`<sup>Required</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.elasticFileSystemExclusionInput"></a>

```java
public java.lang.String getElasticFileSystemExclusionInput();
```

- *Type:* java.lang.String

---

##### `internetGatewayExclusionInput`<sup>Required</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.internetGatewayExclusionInput"></a>

```java
public java.lang.String getInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `lambdaExclusionInput`<sup>Required</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.lambdaExclusionInput"></a>

```java
public java.lang.String getLambdaExclusionInput();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `natGatewayExclusionInput`<sup>Required</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.natGatewayExclusionInput"></a>

```java
public java.lang.String getNatGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `virtualPrivateGatewayExclusionInput`<sup>Required</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.virtualPrivateGatewayExclusionInput"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusionInput();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `vpcLatticeExclusionInput`<sup>Required</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcLatticeExclusionInput"></a>

```java
public java.lang.String getVpcLatticeExclusionInput();
```

- *Type:* java.lang.String

---

##### `vpcPeeringExclusionInput`<sup>Required</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.vpcPeeringExclusionInput"></a>

```java
public java.lang.String getVpcPeeringExclusionInput();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEncryptionControlConfig <a name="Ec2VpcEncryptionControlConfig" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlConfig;

Ec2VpcEncryptionControlConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .egressOnlyInternetGatewayExclusionInput(java.lang.String)
//  .elasticFileSystemExclusionInput(java.lang.String)
//  .internetGatewayExclusionInput(java.lang.String)
//  .lambdaExclusionInput(java.lang.String)
//  .mode(java.lang.String)
//  .natGatewayExclusionInput(java.lang.String)
//  .tags(IResolvable|java.util.List<Ec2VpcEncryptionControlTags>)
//  .virtualPrivateGatewayExclusionInput(java.lang.String)
//  .vpcId(java.lang.String)
//  .vpcLatticeExclusionInput(java.lang.String)
//  .vpcPeeringExclusionInput(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput">egressOnlyInternetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable EIGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput">elasticFileSystemExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable EFS exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput">internetGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable IGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput">lambdaExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Lambda exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | The VPC encryption control mode, either monitor or enforce. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput">natGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Nat gateway exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>></code> | The tags to assign to the VPC encryption control. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput">virtualPrivateGatewayExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable VGW exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | The VPC on which this VPC encryption control is applied. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput">vpcLatticeExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable Vpc Lattice exclusion. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput">vpcPeeringExclusionInput</a></code> | <code>java.lang.String</code> | Used to enable or disable VPC peering exclusion. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `egressOnlyInternetGatewayExclusionInput`<sup>Optional</sup> <a name="egressOnlyInternetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.egressOnlyInternetGatewayExclusionInput"></a>

```java
public java.lang.String getEgressOnlyInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable EIGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#egress_only_internet_gateway_exclusion_input Ec2VpcEncryptionControl#egress_only_internet_gateway_exclusion_input}

---

##### `elasticFileSystemExclusionInput`<sup>Optional</sup> <a name="elasticFileSystemExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.elasticFileSystemExclusionInput"></a>

```java
public java.lang.String getElasticFileSystemExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable EFS exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#elastic_file_system_exclusion_input Ec2VpcEncryptionControl#elastic_file_system_exclusion_input}

---

##### `internetGatewayExclusionInput`<sup>Optional</sup> <a name="internetGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.internetGatewayExclusionInput"></a>

```java
public java.lang.String getInternetGatewayExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable IGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#internet_gateway_exclusion_input Ec2VpcEncryptionControl#internet_gateway_exclusion_input}

---

##### `lambdaExclusionInput`<sup>Optional</sup> <a name="lambdaExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.lambdaExclusionInput"></a>

```java
public java.lang.String getLambdaExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable Lambda exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#lambda_exclusion_input Ec2VpcEncryptionControl#lambda_exclusion_input}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

The VPC encryption control mode, either monitor or enforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#mode Ec2VpcEncryptionControl#mode}

---

##### `natGatewayExclusionInput`<sup>Optional</sup> <a name="natGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.natGatewayExclusionInput"></a>

```java
public java.lang.String getNatGatewayExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable Nat gateway exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#nat_gateway_exclusion_input Ec2VpcEncryptionControl#nat_gateway_exclusion_input}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2VpcEncryptionControlTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>>

The tags to assign to the VPC encryption control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#tags Ec2VpcEncryptionControl#tags}

---

##### `virtualPrivateGatewayExclusionInput`<sup>Optional</sup> <a name="virtualPrivateGatewayExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.virtualPrivateGatewayExclusionInput"></a>

```java
public java.lang.String getVirtualPrivateGatewayExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable VGW exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#virtual_private_gateway_exclusion_input Ec2VpcEncryptionControl#virtual_private_gateway_exclusion_input}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

The VPC on which this VPC encryption control is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_id Ec2VpcEncryptionControl#vpc_id}

---

##### `vpcLatticeExclusionInput`<sup>Optional</sup> <a name="vpcLatticeExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcLatticeExclusionInput"></a>

```java
public java.lang.String getVpcLatticeExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable Vpc Lattice exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_lattice_exclusion_input Ec2VpcEncryptionControl#vpc_lattice_exclusion_input}

---

##### `vpcPeeringExclusionInput`<sup>Optional</sup> <a name="vpcPeeringExclusionInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlConfig.property.vpcPeeringExclusionInput"></a>

```java
public java.lang.String getVpcPeeringExclusionInput();
```

- *Type:* java.lang.String

Used to enable or disable VPC peering exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#vpc_peering_exclusion_input Ec2VpcEncryptionControl#vpc_peering_exclusion_input}

---

### Ec2VpcEncryptionControlResourceExclusions <a name="Ec2VpcEncryptionControlResourceExclusions" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusions;

Ec2VpcEncryptionControlResourceExclusions.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway;

Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem;

Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsInternetGateway <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsInternetGateway;

Ec2VpcEncryptionControlResourceExclusionsInternetGateway.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsLambda <a name="Ec2VpcEncryptionControlResourceExclusionsLambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsLambda;

Ec2VpcEncryptionControlResourceExclusionsLambda.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsNatGateway <a name="Ec2VpcEncryptionControlResourceExclusionsNatGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsNatGateway;

Ec2VpcEncryptionControlResourceExclusionsNatGateway.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway;

Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsVpcLattice <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVpcLattice;

Ec2VpcEncryptionControlResourceExclusionsVpcLattice.builder()
    .build();
```


### Ec2VpcEncryptionControlResourceExclusionsVpcPeering <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVpcPeering;

Ec2VpcEncryptionControlResourceExclusionsVpcPeering.builder()
    .build();
```


### Ec2VpcEncryptionControlTags <a name="Ec2VpcEncryptionControlTags" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlTags;

Ec2VpcEncryptionControlTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#key Ec2VpcEncryptionControl#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_vpc_encryption_control#value Ec2VpcEncryptionControl#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystem</a>

---


### Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsInternetGateway getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGateway">Ec2VpcEncryptionControlResourceExclusionsInternetGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsLambda getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambda">Ec2VpcEncryptionControlResourceExclusionsLambda</a>

---


### Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsNatGateway getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGateway">Ec2VpcEncryptionControlResourceExclusionsNatGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway">egressOnlyInternetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem">elasticFileSystem</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway">internetGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway">natGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway">virtualPrivateGateway</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice">vpcLattice</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering">vpcPeering</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressOnlyInternetGateway`<sup>Required</sup> <a name="egressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.egressOnlyInternetGateway"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference getEgressOnlyInternetGateway();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsEgressOnlyInternetGatewayOutputReference</a>

---

##### `elasticFileSystem`<sup>Required</sup> <a name="elasticFileSystem" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.elasticFileSystem"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference getElasticFileSystem();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference">Ec2VpcEncryptionControlResourceExclusionsElasticFileSystemOutputReference</a>

---

##### `internetGateway`<sup>Required</sup> <a name="internetGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internetGateway"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference getInternetGateway();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsInternetGatewayOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.lambda"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference getLambda();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference">Ec2VpcEncryptionControlResourceExclusionsLambdaOutputReference</a>

---

##### `natGateway`<sup>Required</sup> <a name="natGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.natGateway"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference getNatGateway();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsNatGatewayOutputReference</a>

---

##### `virtualPrivateGateway`<sup>Required</sup> <a name="virtualPrivateGateway" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.virtualPrivateGateway"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference getVirtualPrivateGateway();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference</a>

---

##### `vpcLattice`<sup>Required</sup> <a name="vpcLattice" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcLattice"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference getVpcLattice();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference</a>

---

##### `vpcPeering`<sup>Required</sup> <a name="vpcPeering" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.vpcPeering"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference getVpcPeering();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference">Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusions">Ec2VpcEncryptionControlResourceExclusions</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGatewayOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway">Ec2VpcEncryptionControlResourceExclusionsVirtualPrivateGateway</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLatticeOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVpcLattice getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcLattice">Ec2VpcEncryptionControlResourceExclusionsVpcLattice</a>

---


### Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference <a name="Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference;

new Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeeringOutputReference.property.internalValue"></a>

```java
public Ec2VpcEncryptionControlResourceExclusionsVpcPeering getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlResourceExclusionsVpcPeering">Ec2VpcEncryptionControlResourceExclusionsVpcPeering</a>

---


### Ec2VpcEncryptionControlTagsList <a name="Ec2VpcEncryptionControlTagsList" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlTagsList;

new Ec2VpcEncryptionControlTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get"></a>

```java
public Ec2VpcEncryptionControlTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2VpcEncryptionControlTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>>

---


### Ec2VpcEncryptionControlTagsOutputReference <a name="Ec2VpcEncryptionControlTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_encryption_control.Ec2VpcEncryptionControlTagsOutputReference;

new Ec2VpcEncryptionControlTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2VpcEncryptionControlTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2VpcEncryptionControl.Ec2VpcEncryptionControlTags">Ec2VpcEncryptionControlTags</a>

---



