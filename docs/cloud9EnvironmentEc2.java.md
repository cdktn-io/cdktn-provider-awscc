# `cloud9EnvironmentEc2` Submodule <a name="`cloud9EnvironmentEc2` Submodule" id="@cdktn/provider-awscc.cloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cloud9EnvironmentEc2 <a name="Cloud9EnvironmentEc2" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2 awscc_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2;

Cloud9EnvironmentEc2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .automaticStopTimeMinutes(java.lang.Number)
//  .connectionType(java.lang.String)
//  .description(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceType(java.lang.String)
//  .name(java.lang.String)
//  .ownerArn(java.lang.String)
//  .repositories(IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<Cloud9EnvironmentEc2Tags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>java.lang.Number</code> | The number of minutes until the running instance is shut down after the environment was last used. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connectionType">connectionType</a></code> | <code>java.lang.String</code> | The connection type used for connecting to an Amazon EC2 environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.imageId">imageId</a></code> | <code>java.lang.String</code> | The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of instance to connect to the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.ownerArn">ownerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the environment owner. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.repositories">repositories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>></code> | Any AWS CodeCommit source code repositories to be cloned into the development environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet in Amazon VPC that AWS Cloud9 will use. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>></code> | An array of key-value pairs that will be associated with the new AWS Cloud9 development environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automaticStopTimeMinutes`<sup>Optional</sup> <a name="automaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.automaticStopTimeMinutes"></a>

- *Type:* java.lang.Number

The number of minutes until the running instance is shut down after the environment was last used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.connectionType"></a>

- *Type:* java.lang.String

The connection type used for connecting to an Amazon EC2 environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.imageId"></a>

- *Type:* java.lang.String

The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

The type of instance to connect to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}

---

##### `ownerArn`<sup>Optional</sup> <a name="ownerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.ownerArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the environment owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.repositories"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>>

Any AWS CodeCommit source code repositories to be cloned into the development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repositories Cloud9EnvironmentEc2#repositories}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

The ID of the subnet in Amazon VPC that AWS Cloud9 will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>>

An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories">putRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes">resetAutomaticStopTimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn">resetOwnerArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories">resetRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRepositories` <a name="putRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories"></a>

```java
public void putRepositories(IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putRepositories.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Cloud9EnvironmentEc2Tags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>>

---

##### `resetAutomaticStopTimeMinutes` <a name="resetAutomaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetAutomaticStopTimeMinutes"></a>

```java
public void resetAutomaticStopTimeMinutes()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImageId` <a name="resetImageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetImageId"></a>

```java
public void resetImageId()
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetInstanceType"></a>

```java
public void resetInstanceType()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetName"></a>

```java
public void resetName()
```

##### `resetOwnerArn` <a name="resetOwnerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetOwnerArn"></a>

```java
public void resetOwnerArn()
```

##### `resetRepositories` <a name="resetRepositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetRepositories"></a>

```java
public void resetRepositories()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2;

Cloud9EnvironmentEc2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2;

Cloud9EnvironmentEc2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2;

Cloud9EnvironmentEc2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2;

Cloud9EnvironmentEc2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Cloud9EnvironmentEc2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Cloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Cloud9EnvironmentEc2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Cloud9EnvironmentEc2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Cloud9EnvironmentEc2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories">repositories</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput">automaticStopTimeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput">imageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput">ownerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput">repositoriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn">ownerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositories"></a>

```java
public Cloud9EnvironmentEc2RepositoriesList getRepositories();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList">Cloud9EnvironmentEc2RepositoriesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tags"></a>

```java
public Cloud9EnvironmentEc2TagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList">Cloud9EnvironmentEc2TagsList</a>

---

##### `automaticStopTimeMinutesInput`<sup>Optional</sup> <a name="automaticStopTimeMinutesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutesInput"></a>

```java
public java.lang.Number getAutomaticStopTimeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageIdInput"></a>

```java
public java.lang.String getImageIdInput();
```

- *Type:* java.lang.String

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownerArnInput`<sup>Optional</sup> <a name="ownerArnInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArnInput"></a>

```java
public java.lang.String getOwnerArnInput();
```

- *Type:* java.lang.String

---

##### `repositoriesInput`<sup>Optional</sup> <a name="repositoriesInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.repositoriesInput"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories> getRepositoriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Tags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>>

---

##### `automaticStopTimeMinutes`<sup>Required</sup> <a name="automaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```java
public java.lang.Number getAutomaticStopTimeMinutes();
```

- *Type:* java.lang.Number

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerArn`<sup>Required</sup> <a name="ownerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.ownerArn"></a>

```java
public java.lang.String getOwnerArn();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentEc2Config <a name="Cloud9EnvironmentEc2Config" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2Config;

Cloud9EnvironmentEc2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .automaticStopTimeMinutes(java.lang.Number)
//  .connectionType(java.lang.String)
//  .description(java.lang.String)
//  .imageId(java.lang.String)
//  .instanceType(java.lang.String)
//  .name(java.lang.String)
//  .ownerArn(java.lang.String)
//  .repositories(IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories>)
//  .subnetId(java.lang.String)
//  .tags(IResolvable|java.util.List<Cloud9EnvironmentEc2Tags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes">automaticStopTimeMinutes</a></code> | <code>java.lang.Number</code> | The number of minutes until the running instance is shut down after the environment was last used. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | The connection type used for connecting to an Amazon EC2 environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description">description</a></code> | <code>java.lang.String</code> | The description of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId">imageId</a></code> | <code>java.lang.String</code> | The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | The type of instance to connect to the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn">ownerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the environment owner. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories">repositories</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>></code> | Any AWS CodeCommit source code repositories to be cloned into the development environment. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | The ID of the subnet in Amazon VPC that AWS Cloud9 will use. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>></code> | An array of key-value pairs that will be associated with the new AWS Cloud9 development environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `automaticStopTimeMinutes`<sup>Optional</sup> <a name="automaticStopTimeMinutes" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.automaticStopTimeMinutes"></a>

```java
public java.lang.Number getAutomaticStopTimeMinutes();
```

- *Type:* java.lang.Number

The number of minutes until the running instance is shut down after the environment was last used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

The connection type used for connecting to an Amazon EC2 environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#connection_type Cloud9EnvironmentEc2#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#description Cloud9EnvironmentEc2#description}

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#image_id Cloud9EnvironmentEc2#image_id}

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

The type of instance to connect to the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#instance_type Cloud9EnvironmentEc2#instance_type}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#name Cloud9EnvironmentEc2#name}

---

##### `ownerArn`<sup>Optional</sup> <a name="ownerArn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.ownerArn"></a>

```java
public java.lang.String getOwnerArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the environment owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#owner_arn Cloud9EnvironmentEc2#owner_arn}

---

##### `repositories`<sup>Optional</sup> <a name="repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.repositories"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories> getRepositories();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>>

Any AWS CodeCommit source code repositories to be cloned into the development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repositories Cloud9EnvironmentEc2#repositories}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

The ID of the subnet in Amazon VPC that AWS Cloud9 will use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#subnet_id Cloud9EnvironmentEc2#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Config.property.tags"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Tags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>>

An array of key-value pairs that will be associated with the new AWS Cloud9 development environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#tags Cloud9EnvironmentEc2#tags}

---

### Cloud9EnvironmentEc2Repositories <a name="Cloud9EnvironmentEc2Repositories" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2Repositories;

Cloud9EnvironmentEc2Repositories.builder()
//  .pathComponent(java.lang.String)
//  .repositoryUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent">pathComponent</a></code> | <code>java.lang.String</code> | The path within the development environment's default file system location to clone the AWS CodeCommit repository into. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | The clone URL of the AWS CodeCommit repository to be cloned. |

---

##### `pathComponent`<sup>Optional</sup> <a name="pathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.pathComponent"></a>

```java
public java.lang.String getPathComponent();
```

- *Type:* java.lang.String

The path within the development environment's default file system location to clone the AWS CodeCommit repository into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#path_component Cloud9EnvironmentEc2#path_component}

---

##### `repositoryUrl`<sup>Optional</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

The clone URL of the AWS CodeCommit repository to be cloned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#repository_url Cloud9EnvironmentEc2#repository_url}

---

### Cloud9EnvironmentEc2Tags <a name="Cloud9EnvironmentEc2Tags" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2Tags;

Cloud9EnvironmentEc2Tags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#key Cloud9EnvironmentEc2#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloud9_environment_ec2#value Cloud9EnvironmentEc2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Cloud9EnvironmentEc2RepositoriesList <a name="Cloud9EnvironmentEc2RepositoriesList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2RepositoriesList;

new Cloud9EnvironmentEc2RepositoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get"></a>

```java
public Cloud9EnvironmentEc2RepositoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Repositories> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>>

---


### Cloud9EnvironmentEc2RepositoriesOutputReference <a name="Cloud9EnvironmentEc2RepositoriesOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2RepositoriesOutputReference;

new Cloud9EnvironmentEc2RepositoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent">resetPathComponent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl">resetRepositoryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPathComponent` <a name="resetPathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetPathComponent"></a>

```java
public void resetPathComponent()
```

##### `resetRepositoryUrl` <a name="resetRepositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.resetRepositoryUrl"></a>

```java
public void resetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput">pathComponentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput">repositoryUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent">pathComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl">repositoryUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathComponentInput`<sup>Optional</sup> <a name="pathComponentInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponentInput"></a>

```java
public java.lang.String getPathComponentInput();
```

- *Type:* java.lang.String

---

##### `repositoryUrlInput`<sup>Optional</sup> <a name="repositoryUrlInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrlInput"></a>

```java
public java.lang.String getRepositoryUrlInput();
```

- *Type:* java.lang.String

---

##### `pathComponent`<sup>Required</sup> <a name="pathComponent" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent"></a>

```java
public java.lang.String getPathComponent();
```

- *Type:* java.lang.String

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl"></a>

```java
public java.lang.String getRepositoryUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue"></a>

```java
public IResolvable|Cloud9EnvironmentEc2Repositories getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Repositories">Cloud9EnvironmentEc2Repositories</a>

---


### Cloud9EnvironmentEc2TagsList <a name="Cloud9EnvironmentEc2TagsList" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2TagsList;

new Cloud9EnvironmentEc2TagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get"></a>

```java
public Cloud9EnvironmentEc2TagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Cloud9EnvironmentEc2Tags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>>

---


### Cloud9EnvironmentEc2TagsOutputReference <a name="Cloud9EnvironmentEc2TagsOutputReference" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloud9_environment_ec2.Cloud9EnvironmentEc2TagsOutputReference;

new Cloud9EnvironmentEc2TagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2TagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Cloud9EnvironmentEc2Tags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloud9EnvironmentEc2.Cloud9EnvironmentEc2Tags">Cloud9EnvironmentEc2Tags</a>

---



