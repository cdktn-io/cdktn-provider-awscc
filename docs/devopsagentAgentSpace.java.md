# `devopsagentAgentSpace` Submodule <a name="`devopsagentAgentSpace` Submodule" id="@cdktn/provider-awscc.devopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAgentSpace <a name="DevopsagentAgentSpace" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space awscc_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpace;

DevopsagentAgentSpace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .locale(java.lang.String)
//  .operatorApp(DevopsagentAgentSpaceOperatorApp)
//  .tags(IResolvable|java.util.List<DevopsagentAgentSpaceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.locale">locale</a></code> | <code>java.lang.String</code> | The locale for the AgentSpace, which determines the language used in agent responses. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#name DevopsagentAgentSpace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#description DevopsagentAgentSpace#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.kmsKeyArn"></a>

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#kms_key_arn DevopsagentAgentSpace#kms_key_arn}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.locale"></a>

- *Type:* java.lang.String

The locale for the AgentSpace, which determines the language used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#locale DevopsagentAgentSpace#locale}

---

##### `operatorApp`<sup>Optional</sup> <a name="operatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.operatorApp"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp">putOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOperatorApp">resetOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOperatorApp` <a name="putOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp"></a>

```java
public void putOperatorApp(DevopsagentAgentSpaceOperatorApp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putOperatorApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsagentAgentSpaceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale"></a>

```java
public void resetLocale()
```

##### `resetOperatorApp` <a name="resetOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetOperatorApp"></a>

```java
public void resetOperatorApp()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpace;

DevopsagentAgentSpace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpace;

DevopsagentAgentSpace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpace;

DevopsagentAgentSpace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpace;

DevopsagentAgentSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsagentAgentSpace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference">DevopsagentAgentSpaceOperatorAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList">DevopsagentAgentSpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput">localeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorAppInput">operatorAppInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale">locale</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId"></a>

```java
public java.lang.String getAgentSpaceId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `operatorApp`<sup>Required</sup> <a name="operatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorApp"></a>

```java
public DevopsagentAgentSpaceOperatorAppOutputReference getOperatorApp();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference">DevopsagentAgentSpaceOperatorAppOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags"></a>

```java
public DevopsagentAgentSpaceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList">DevopsagentAgentSpaceTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput"></a>

```java
public java.lang.String getLocaleInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operatorAppInput`<sup>Optional</sup> <a name="operatorAppInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.operatorAppInput"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorApp getOperatorAppInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsagentAgentSpaceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAgentSpaceConfig <a name="DevopsagentAgentSpaceConfig" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceConfig;

DevopsagentAgentSpaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyArn(java.lang.String)
//  .locale(java.lang.String)
//  .operatorApp(DevopsagentAgentSpaceOperatorApp)
//  .tags(IResolvable|java.util.List<DevopsagentAgentSpaceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key to use for encryption. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale">locale</a></code> | <code>java.lang.String</code> | The locale for the AgentSpace, which determines the language used in agent responses. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.operatorApp">operatorApp</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#name DevopsagentAgentSpace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#description DevopsagentAgentSpace#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#kms_key_arn DevopsagentAgentSpace#kms_key_arn}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale"></a>

```java
public java.lang.String getLocale();
```

- *Type:* java.lang.String

The locale for the AgentSpace, which determines the language used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#locale DevopsagentAgentSpace#locale}

---

##### `operatorApp`<sup>Optional</sup> <a name="operatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.operatorApp"></a>

```java
public DevopsagentAgentSpaceOperatorApp getOperatorApp();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app DevopsagentAgentSpace#operator_app}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsagentAgentSpaceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}

---

### DevopsagentAgentSpaceOperatorApp <a name="DevopsagentAgentSpaceOperatorApp" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorApp;

DevopsagentAgentSpaceOperatorApp.builder()
//  .iam(DevopsagentAgentSpaceOperatorAppIam)
//  .idc(DevopsagentAgentSpaceOperatorAppIdc)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#iam DevopsagentAgentSpace#iam}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.idc">idc</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc DevopsagentAgentSpace#idc}. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.iam"></a>

```java
public DevopsagentAgentSpaceOperatorAppIam getIam();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#iam DevopsagentAgentSpace#iam}.

---

##### `idc`<sup>Optional</sup> <a name="idc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp.property.idc"></a>

```java
public DevopsagentAgentSpaceOperatorAppIdc getIdc();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc DevopsagentAgentSpace#idc}.

---

### DevopsagentAgentSpaceOperatorAppIam <a name="DevopsagentAgentSpaceOperatorAppIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorAppIam;

DevopsagentAgentSpaceOperatorAppIam.builder()
//  .operatorAppRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}. |

---

##### `operatorAppRoleArn`<sup>Optional</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam.property.operatorAppRoleArn"></a>

```java
public java.lang.String getOperatorAppRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}.

---

### DevopsagentAgentSpaceOperatorAppIdc <a name="DevopsagentAgentSpaceOperatorAppIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorAppIdc;

DevopsagentAgentSpaceOperatorAppIdc.builder()
//  .idcInstanceArn(java.lang.String)
//  .operatorAppRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc_instance_arn DevopsagentAgentSpace#idc_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}. |

---

##### `idcInstanceArn`<sup>Optional</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#idc_instance_arn DevopsagentAgentSpace#idc_instance_arn}.

---

##### `operatorAppRoleArn`<sup>Optional</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc.property.operatorAppRoleArn"></a>

```java
public java.lang.String getOperatorAppRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#operator_app_role_arn DevopsagentAgentSpace#operator_app_role_arn}.

---

### DevopsagentAgentSpaceTags <a name="DevopsagentAgentSpaceTags" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceTags;

DevopsagentAgentSpaceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#key DevopsagentAgentSpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/devopsagent_agent_space#value DevopsagentAgentSpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAgentSpaceOperatorAppIamOutputReference <a name="DevopsagentAgentSpaceOperatorAppIamOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorAppIamOutputReference;

new DevopsagentAgentSpaceOperatorAppIamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resetOperatorAppRoleArn">resetOperatorAppRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperatorAppRoleArn` <a name="resetOperatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.resetOperatorAppRoleArn"></a>

```java
public void resetOperatorAppRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArnInput">operatorAppRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `operatorAppRoleArnInput`<sup>Optional</sup> <a name="operatorAppRoleArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArnInput"></a>

```java
public java.lang.String getOperatorAppRoleArnInput();
```

- *Type:* java.lang.String

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.operatorAppRoleArn"></a>

```java
public java.lang.String getOperatorAppRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorAppIam getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---


### DevopsagentAgentSpaceOperatorAppIdcOutputReference <a name="DevopsagentAgentSpaceOperatorAppIdcOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorAppIdcOutputReference;

new DevopsagentAgentSpaceOperatorAppIdcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetIdcInstanceArn">resetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetOperatorAppRoleArn">resetOperatorAppRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdcInstanceArn` <a name="resetIdcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetIdcInstanceArn"></a>

```java
public void resetIdcInstanceArn()
```

##### `resetOperatorAppRoleArn` <a name="resetOperatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.resetOperatorAppRoleArn"></a>

```java
public void resetOperatorAppRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn">idcApplicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArnInput">idcInstanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArnInput">operatorAppRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn">idcInstanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn">operatorAppRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `idcApplicationArn`<sup>Required</sup> <a name="idcApplicationArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcApplicationArn"></a>

```java
public java.lang.String getIdcApplicationArn();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `idcInstanceArnInput`<sup>Optional</sup> <a name="idcInstanceArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArnInput"></a>

```java
public java.lang.String getIdcInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `operatorAppRoleArnInput`<sup>Optional</sup> <a name="operatorAppRoleArnInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArnInput"></a>

```java
public java.lang.String getOperatorAppRoleArnInput();
```

- *Type:* java.lang.String

---

##### `idcInstanceArn`<sup>Required</sup> <a name="idcInstanceArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.idcInstanceArn"></a>

```java
public java.lang.String getIdcInstanceArn();
```

- *Type:* java.lang.String

---

##### `operatorAppRoleArn`<sup>Required</sup> <a name="operatorAppRoleArn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.operatorAppRoleArn"></a>

```java
public java.lang.String getOperatorAppRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorAppIdc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---


### DevopsagentAgentSpaceOperatorAppOutputReference <a name="DevopsagentAgentSpaceOperatorAppOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceOperatorAppOutputReference;

new DevopsagentAgentSpaceOperatorAppOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc">putIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIdc">resetIdc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIam` <a name="putIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam"></a>

```java
public void putIam(DevopsagentAgentSpaceOperatorAppIam value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---

##### `putIdc` <a name="putIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc"></a>

```java
public void putIdc(DevopsagentAgentSpaceOperatorAppIdc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.putIdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---

##### `resetIam` <a name="resetIam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIam"></a>

```java
public void resetIam()
```

##### `resetIdc` <a name="resetIdc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.resetIdc"></a>

```java
public void resetIdc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference">DevopsagentAgentSpaceOperatorAppIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idc">idc</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference">DevopsagentAgentSpaceOperatorAppIdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iamInput">iamInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idcInput">idcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iam"></a>

```java
public DevopsagentAgentSpaceOperatorAppIamOutputReference getIam();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIamOutputReference">DevopsagentAgentSpaceOperatorAppIamOutputReference</a>

---

##### `idc`<sup>Required</sup> <a name="idc" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idc"></a>

```java
public DevopsagentAgentSpaceOperatorAppIdcOutputReference getIdc();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdcOutputReference">DevopsagentAgentSpaceOperatorAppIdcOutputReference</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.iamInput"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorAppIam getIamInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIam">DevopsagentAgentSpaceOperatorAppIam</a>

---

##### `idcInput`<sup>Optional</sup> <a name="idcInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.idcInput"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorAppIdc getIdcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppIdc">DevopsagentAgentSpaceOperatorAppIdc</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorAppOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAgentSpaceOperatorApp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceOperatorApp">DevopsagentAgentSpaceOperatorApp</a>

---


### DevopsagentAgentSpaceTagsList <a name="DevopsagentAgentSpaceTagsList" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceTagsList;

new DevopsagentAgentSpaceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get"></a>

```java
public DevopsagentAgentSpaceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsagentAgentSpaceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>>

---


### DevopsagentAgentSpaceTagsOutputReference <a name="DevopsagentAgentSpaceTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsagent_agent_space.DevopsagentAgentSpaceTagsOutputReference;

new DevopsagentAgentSpaceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsagentAgentSpaceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsagentAgentSpace.DevopsagentAgentSpaceTags">DevopsagentAgentSpaceTags</a>

---



