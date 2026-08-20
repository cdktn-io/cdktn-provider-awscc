# `cloudformationHookTypeConfig` Submodule <a name="`cloudformationHookTypeConfig` Submodule" id="@cdktn/provider-awscc.cloudformationHookTypeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationHookTypeConfig <a name="CloudformationHookTypeConfig" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config awscc_cloudformation_hook_type_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfig;

CloudformationHookTypeConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configuration(java.lang.String)
//  .configurationAlias(java.lang.String)
//  .typeArn(java.lang.String)
//  .typeName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | The configuration data for the extension, in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.configurationAlias">configurationAlias</a></code> | <code>java.lang.String</code> | An alias by which to refer to this extension configuration data. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.typeArn">typeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the type without version number. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

The configuration data for the extension, in this account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#configuration CloudformationHookTypeConfig#configuration}

---

##### `configurationAlias`<sup>Optional</sup> <a name="configurationAlias" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.configurationAlias"></a>

- *Type:* java.lang.String

An alias by which to refer to this extension configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#configuration_alias CloudformationHookTypeConfig#configuration_alias}

---

##### `typeArn`<sup>Optional</sup> <a name="typeArn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.typeArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the type without version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#type_arn CloudformationHookTypeConfig#type_arn}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.Initializer.parameter.typeName"></a>

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#type_name CloudformationHookTypeConfig#type_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetConfigurationAlias">resetConfigurationAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetTypeArn">resetTypeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetTypeName">resetTypeName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetConfigurationAlias` <a name="resetConfigurationAlias" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetConfigurationAlias"></a>

```java
public void resetConfigurationAlias()
```

##### `resetTypeArn` <a name="resetTypeArn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetTypeArn"></a>

```java
public void resetTypeArn()
```

##### `resetTypeName` <a name="resetTypeName" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.resetTypeName"></a>

```java
public void resetTypeName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudformationHookTypeConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfig;

CloudformationHookTypeConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfig;

CloudformationHookTypeConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfig;

CloudformationHookTypeConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfig;

CloudformationHookTypeConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationHookTypeConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudformationHookTypeConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationHookTypeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationHookTypeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationHookTypeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationArn">configurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationAliasInput">configurationAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeArnInput">typeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeNameInput">typeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationAlias">configurationAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeArn">typeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeName">typeName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configurationArn`<sup>Required</sup> <a name="configurationArn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationArn"></a>

```java
public java.lang.String getConfigurationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `configurationAliasInput`<sup>Optional</sup> <a name="configurationAliasInput" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationAliasInput"></a>

```java
public java.lang.String getConfigurationAliasInput();
```

- *Type:* java.lang.String

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `typeArnInput`<sup>Optional</sup> <a name="typeArnInput" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeArnInput"></a>

```java
public java.lang.String getTypeArnInput();
```

- *Type:* java.lang.String

---

##### `typeNameInput`<sup>Optional</sup> <a name="typeNameInput" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeNameInput"></a>

```java
public java.lang.String getTypeNameInput();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `configurationAlias`<sup>Required</sup> <a name="configurationAlias" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.configurationAlias"></a>

```java
public java.lang.String getConfigurationAlias();
```

- *Type:* java.lang.String

---

##### `typeArn`<sup>Required</sup> <a name="typeArn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeArn"></a>

```java
public java.lang.String getTypeArn();
```

- *Type:* java.lang.String

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationHookTypeConfigConfig <a name="CloudformationHookTypeConfigConfig" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudformation_hook_type_config.CloudformationHookTypeConfigConfig;

CloudformationHookTypeConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .configuration(java.lang.String)
//  .configurationAlias(java.lang.String)
//  .typeArn(java.lang.String)
//  .typeName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | The configuration data for the extension, in this account and region. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.configurationAlias">configurationAlias</a></code> | <code>java.lang.String</code> | An alias by which to refer to this extension configuration data. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.typeArn">typeArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the type without version number. |
| <code><a href="#@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.typeName">typeName</a></code> | <code>java.lang.String</code> | The name of the type being registered. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

The configuration data for the extension, in this account and region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#configuration CloudformationHookTypeConfig#configuration}

---

##### `configurationAlias`<sup>Optional</sup> <a name="configurationAlias" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.configurationAlias"></a>

```java
public java.lang.String getConfigurationAlias();
```

- *Type:* java.lang.String

An alias by which to refer to this extension configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#configuration_alias CloudformationHookTypeConfig#configuration_alias}

---

##### `typeArn`<sup>Optional</sup> <a name="typeArn" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.typeArn"></a>

```java
public java.lang.String getTypeArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the type without version number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#type_arn CloudformationHookTypeConfig#type_arn}

---

##### `typeName`<sup>Optional</sup> <a name="typeName" id="@cdktn/provider-awscc.cloudformationHookTypeConfig.CloudformationHookTypeConfigConfig.property.typeName"></a>

```java
public java.lang.String getTypeName();
```

- *Type:* java.lang.String

The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cloudformation_hook_type_config#type_name CloudformationHookTypeConfig#type_name}

---



