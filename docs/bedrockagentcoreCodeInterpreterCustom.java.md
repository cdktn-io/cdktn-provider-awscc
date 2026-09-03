# `bedrockagentcoreCodeInterpreterCustom` Submodule <a name="`bedrockagentcoreCodeInterpreterCustom` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreCodeInterpreterCustom <a name="BedrockagentcoreCodeInterpreterCustom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom awscc_bedrockagentcore_code_interpreter_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustom;

BedrockagentcoreCodeInterpreterCustom.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkConfiguration(BedrockagentcoreCodeInterpreterCustomNetworkConfiguration)
//  .certificates(IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates>)
//  .description(java.lang.String)
//  .executionRoleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | Network configuration for code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>></code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the code interpreter uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#name BedrockagentcoreCodeInterpreterCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

Network configuration for code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_configuration BedrockagentcoreCodeInterpreterCustom#network_configuration}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.certificates"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>>

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificates BedrockagentcoreCodeInterpreterCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#description BedrockagentcoreCodeInterpreterCustom#description}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

The ARN of the IAM role that the code interpreter uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#execution_role_arn BedrockagentcoreCodeInterpreterCustom#execution_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#tags BedrockagentcoreCodeInterpreterCustom#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn">resetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates"></a>

```java
public void putCertificates(IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putCertificates.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(BedrockagentcoreCodeInterpreterCustomNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetCertificates"></a>

```java
public void resetCertificates()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionRoleArn` <a name="resetExecutionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetExecutionRoleArn"></a>

```java
public void resetExecutionRoleArn()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustom;

BedrockagentcoreCodeInterpreterCustom.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustom;

BedrockagentcoreCodeInterpreterCustom.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustom;

BedrockagentcoreCodeInterpreterCustom.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustom;

BedrockagentcoreCodeInterpreterCustom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockagentcoreCodeInterpreterCustom.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockagentcoreCodeInterpreterCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockagentcoreCodeInterpreterCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreCodeInterpreterCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId">codeInterpreterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason">failureReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput">certificatesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificates"></a>

```java
public BedrockagentcoreCodeInterpreterCustomCertificatesList getCertificates();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList">BedrockagentcoreCodeInterpreterCustomCertificatesList</a>

---

##### `codeInterpreterArn`<sup>Required</sup> <a name="codeInterpreterArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn"></a>

```java
public java.lang.String getCodeInterpreterArn();
```

- *Type:* java.lang.String

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId"></a>

```java
public java.lang.String getCodeInterpreterId();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.failureReason"></a>

```java
public java.lang.String getFailureReason();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfiguration"></a>

```java
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.certificatesInput"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates> getCertificatesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.networkConfigurationInput"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustom.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreCodeInterpreterCustomCertificates <a name="BedrockagentcoreCodeInterpreterCustomCertificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomCertificates;

BedrockagentcoreCodeInterpreterCustomCertificates.builder()
//  .certificateLocation(BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | Certificate location in Secrets Manager. |

---

##### `certificateLocation`<sup>Optional</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates.property.certificateLocation"></a>

```java
public BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation getCertificateLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

Certificate location in Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificate_location BedrockagentcoreCodeInterpreterCustom#certificate_location}

---

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation;

BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.builder()
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Secrets Manager secret ARN. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Secrets Manager secret ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#secret_arn BedrockagentcoreCodeInterpreterCustom#secret_arn}

---

### BedrockagentcoreCodeInterpreterCustomConfig <a name="BedrockagentcoreCodeInterpreterCustomConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomConfig;

BedrockagentcoreCodeInterpreterCustomConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .networkConfiguration(BedrockagentcoreCodeInterpreterCustomNetworkConfiguration)
//  .certificates(IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates>)
//  .description(java.lang.String)
//  .executionRoleArn(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | Network configuration for code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates">certificates</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>></code> | List of root CA certificates in PEM format. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that the code interpreter uses to access resources. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of tag keys and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#name BedrockagentcoreCodeInterpreterCustom#name}

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.networkConfiguration"></a>

```java
public BedrockagentcoreCodeInterpreterCustomNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

Network configuration for code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_configuration BedrockagentcoreCodeInterpreterCustom#network_configuration}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.certificates"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates> getCertificates();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>>

List of root CA certificates in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#certificates BedrockagentcoreCodeInterpreterCustom#certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#description BedrockagentcoreCodeInterpreterCustom#description}

---

##### `executionRoleArn`<sup>Optional</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that the code interpreter uses to access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#execution_role_arn BedrockagentcoreCodeInterpreterCustom#execution_role_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of tag keys and values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#tags BedrockagentcoreCodeInterpreterCustom#tags}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfiguration <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration;

BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.builder()
//  .networkMode(java.lang.String)
//  .vpcConfig(BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | Network modes supported by code interpreter. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | Network mode configuration for VPC. |

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

Network modes supported by code interpreter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#network_mode BedrockagentcoreCodeInterpreterCustom#network_mode}

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration.property.vpcConfig"></a>

```java
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

Network mode configuration for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#vpc_config BedrockagentcoreCodeInterpreterCustom#vpc_config}

---

### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig;

BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Security groups for VPC. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Subnets for VPC. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Security groups for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#security_groups BedrockagentcoreCodeInterpreterCustom#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Subnets for VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_code_interpreter_custom#subnets BedrockagentcoreCodeInterpreterCustom#subnets}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference;

new BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---


### BedrockagentcoreCodeInterpreterCustomCertificatesList <a name="BedrockagentcoreCodeInterpreterCustomCertificatesList" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomCertificatesList;

new BedrockagentcoreCodeInterpreterCustomCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get"></a>

```java
public BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockagentcoreCodeInterpreterCustomCertificates> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>>

---


### BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference <a name="BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference;

new BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation">putCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation">resetCertificateLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificateLocation` <a name="putCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation"></a>

```java
public void putCertificateLocation(BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.putCertificateLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `resetCertificateLocation` <a name="resetCertificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resetCertificateLocation"></a>

```java
public void resetCertificateLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput">certificateLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateLocation`<sup>Required</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation"></a>

```java
public BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference getCertificateLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a>

---

##### `certificateLocationInput`<sup>Optional</sup> <a name="certificateLocationInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocationInput"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation getCertificateLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">BedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomCertificates getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomCertificates">BedrockagentcoreCodeInterpreterCustomCertificates</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference;

new BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig"></a>

```java
public void putVpcConfig(BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `resetNetworkMode` <a name="resetNetworkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetNetworkMode"></a>

```java
public void resetNetworkMode()
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resetVpcConfig"></a>

```java
public void resetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput">networkModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput">vpcConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```java
public BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference getVpcConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkModeInput"></a>

```java
public java.lang.String getNetworkModeInput();
```

- *Type:* java.lang.String

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfigInput"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig getVpcConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```java
public java.lang.String getNetworkMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfiguration">BedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---


### BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference <a name="BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.bedrockagentcore_code_interpreter_custom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference;

new BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreCodeInterpreterCustom.BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">BedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---



