# `quicksightVpcConnection` Submodule <a name="`quicksightVpcConnection` Submodule" id="@cdktn/provider-awscc.quicksightVpcConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightVpcConnection <a name="QuicksightVpcConnection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection awscc_quicksight_vpc_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityStatus(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dnsResolvers(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .roleArn(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<QuicksightVpcConnectionTags>)
//  .vpcConnectionId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.availabilityStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `vpcConnectionId`<sup>Optional</sup> <a name="vpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus">resetAvailabilityStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers">resetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId">resetVpcConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<QuicksightVpcConnectionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>>

---

##### `resetAvailabilityStatus` <a name="resetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus"></a>

```java
public void resetAvailabilityStatus()
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDnsResolvers` <a name="resetDnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers"></a>

```java
public void resetDnsResolvers()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName"></a>

```java
public void resetName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetVpcConnectionId` <a name="resetVpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId"></a>

```java
public void resetVpcConnectionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightVpcConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightVpcConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightVpcConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightVpcConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput">availabilityStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput">dnsResolversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput">vpcConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime"></a>

```java
public java.lang.String getLastUpdatedTime();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces"></a>

```java
public QuicksightVpcConnectionNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags"></a>

```java
public QuicksightVpcConnectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `availabilityStatusInput`<sup>Optional</sup> <a name="availabilityStatusInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput"></a>

```java
public java.lang.String getAvailabilityStatusInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `dnsResolversInput`<sup>Optional</sup> <a name="dnsResolversInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput"></a>

```java
public java.util.List<java.lang.String> getDnsResolversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput"></a>

```java
public IResolvable|java.util.List<QuicksightVpcConnectionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>>

---

##### `vpcConnectionIdInput`<sup>Optional</sup> <a name="vpcConnectionIdInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput"></a>

```java
public java.lang.String getVpcConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dnsResolvers`<sup>Required</sup> <a name="dnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers"></a>

```java
public java.util.List<java.lang.String> getDnsResolvers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcConnectionId`<sup>Required</sup> <a name="vpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId"></a>

```java
public java.lang.String getVpcConnectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightVpcConnectionConfig <a name="QuicksightVpcConnectionConfig" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionConfig;

QuicksightVpcConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityStatus(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dnsResolvers(java.util.List<java.lang.String>)
//  .name(java.lang.String)
//  .roleArn(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<QuicksightVpcConnectionTags>)
//  .vpcConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityStatus`<sup>Optional</sup> <a name="availabilityStatus" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers"></a>

```java
public java.util.List<java.lang.String> getDnsResolvers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<QuicksightVpcConnectionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `vpcConnectionId`<sup>Optional</sup> <a name="vpcConnectionId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId"></a>

```java
public java.lang.String getVpcConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

### QuicksightVpcConnectionNetworkInterfaces <a name="QuicksightVpcConnectionNetworkInterfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionNetworkInterfaces;

QuicksightVpcConnectionNetworkInterfaces.builder()
    .build();
```


### QuicksightVpcConnectionTags <a name="QuicksightVpcConnectionTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionTags;

QuicksightVpcConnectionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key">key</a></code> | <code>java.lang.String</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value">value</a></code> | <code>java.lang.String</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#key QuicksightVpcConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#value QuicksightVpcConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightVpcConnectionNetworkInterfacesList <a name="QuicksightVpcConnectionNetworkInterfacesList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionNetworkInterfacesList;

new QuicksightVpcConnectionNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get"></a>

```java
public QuicksightVpcConnectionNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### QuicksightVpcConnectionNetworkInterfacesOutputReference <a name="QuicksightVpcConnectionNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionNetworkInterfacesOutputReference;

new QuicksightVpcConnectionNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public QuicksightVpcConnectionNetworkInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a>

---


### QuicksightVpcConnectionTagsList <a name="QuicksightVpcConnectionTagsList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionTagsList;

new QuicksightVpcConnectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get"></a>

```java
public QuicksightVpcConnectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<QuicksightVpcConnectionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>>

---


### QuicksightVpcConnectionTagsOutputReference <a name="QuicksightVpcConnectionTagsOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.quicksight_vpc_connection.QuicksightVpcConnectionTagsOutputReference;

new QuicksightVpcConnectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|QuicksightVpcConnectionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>

---



