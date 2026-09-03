# `glueIntegrationResourceProperty` Submodule <a name="`glueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.glueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegrationResourceProperty <a name="GlueIntegrationResourceProperty" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourceProperty;

GlueIntegrationResourceProperty.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceArn(java.lang.String)
//  .sourceProcessingProperties(GlueIntegrationResourcePropertySourceProcessingProperties)
//  .tags(IResolvable|java.util.List<GlueIntegrationResourcePropertyTags>)
//  .targetProcessingProperties(GlueIntegrationResourcePropertyTargetProcessingProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.resourceArn"></a>

- *Type:* java.lang.String

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `sourceProcessingProperties`<sup>Optional</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.sourceProcessingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `targetProcessingProperties`<sup>Optional</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.Initializer.parameter.targetProcessingProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties">putSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties">putTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties">resetSourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties">resetTargetProcessingProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceProcessingProperties` <a name="putSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties"></a>

```java
public void putSourceProcessingProperties(GlueIntegrationResourcePropertySourceProcessingProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putSourceProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GlueIntegrationResourcePropertyTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>>

---

##### `putTargetProcessingProperties` <a name="putTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties"></a>

```java
public void putTargetProcessingProperties(GlueIntegrationResourcePropertyTargetProcessingProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.putTargetProcessingProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `resetSourceProcessingProperties` <a name="resetSourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetSourceProcessingProperties"></a>

```java
public void resetSourceProcessingProperties()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTags"></a>

```java
public void resetTags()
```

##### `resetTargetProcessingProperties` <a name="resetTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.resetTargetProcessingProperties"></a>

```java
public void resetTargetProcessingProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourceProperty;

GlueIntegrationResourceProperty.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourceProperty;

GlueIntegrationResourceProperty.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourceProperty;

GlueIntegrationResourceProperty.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourceProperty;

GlueIntegrationResourceProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueIntegrationResourceProperty.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueIntegrationResourceProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn">resourcePropertyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput">resourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput">sourceProcessingPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput">targetProcessingPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourcePropertyArn`<sup>Required</sup> <a name="resourcePropertyArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```java
public java.lang.String getResourcePropertyArn();
```

- *Type:* java.lang.String

---

##### `sourceProcessingProperties`<sup>Required</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```java
public GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference getSourceProcessingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tags"></a>

```java
public GlueIntegrationResourcePropertyTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList">GlueIntegrationResourcePropertyTagsList</a>

---

##### `targetProcessingProperties`<sup>Required</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```java
public GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference getTargetProcessingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArnInput"></a>

```java
public java.lang.String getResourceArnInput();
```

- *Type:* java.lang.String

---

##### `sourceProcessingPropertiesInput`<sup>Optional</sup> <a name="sourceProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.sourceProcessingPropertiesInput"></a>

```java
public IResolvable|GlueIntegrationResourcePropertySourceProcessingProperties getSourceProcessingPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GlueIntegrationResourcePropertyTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>>

---

##### `targetProcessingPropertiesInput`<sup>Optional</sup> <a name="targetProcessingPropertiesInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.targetProcessingPropertiesInput"></a>

```java
public IResolvable|GlueIntegrationResourcePropertyTargetProcessingProperties getTargetProcessingPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourceProperty.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationResourcePropertyConfig <a name="GlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyConfig;

GlueIntegrationResourcePropertyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceArn(java.lang.String)
//  .sourceProcessingProperties(GlueIntegrationResourcePropertySourceProcessingProperties)
//  .tags(IResolvable|java.util.List<GlueIntegrationResourcePropertyTags>)
//  .targetProcessingProperties(GlueIntegrationResourcePropertyTargetProcessingProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn">resourceArn</a></code> | <code>java.lang.String</code> | The connection ARN of the source, or the database ARN of the target. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties">sourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | The resource properties associated with the integration source. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties">targetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | The resource properties associated with the integration target. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.resourceArn"></a>

```java
public java.lang.String getResourceArn();
```

- *Type:* java.lang.String

The connection ARN of the source, or the database ARN of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#resource_arn GlueIntegrationResourceProperty#resource_arn}

---

##### `sourceProcessingProperties`<sup>Optional</sup> <a name="sourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.sourceProcessingProperties"></a>

```java
public GlueIntegrationResourcePropertySourceProcessingProperties getSourceProcessingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

The resource properties associated with the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#source_processing_properties GlueIntegrationResourceProperty#source_processing_properties}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GlueIntegrationResourcePropertyTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#tags GlueIntegrationResourceProperty#tags}

---

##### `targetProcessingProperties`<sup>Optional</sup> <a name="targetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyConfig.property.targetProcessingProperties"></a>

```java
public GlueIntegrationResourcePropertyTargetProcessingProperties getTargetProcessingProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

The resource properties associated with the integration target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#target_processing_properties GlueIntegrationResourceProperty#target_processing_properties}

---

### GlueIntegrationResourcePropertySourceProcessingProperties <a name="GlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertySourceProcessingProperties;

GlueIntegrationResourcePropertySourceProcessingProperties.builder()
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role to access the Glue connection. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role to access the Glue connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

### GlueIntegrationResourcePropertyTags <a name="GlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyTags;

GlueIntegrationResourcePropertyTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#key GlueIntegrationResourceProperty#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#value GlueIntegrationResourceProperty#value}

---

### GlueIntegrationResourcePropertyTargetProcessingProperties <a name="GlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyTargetProcessingProperties;

GlueIntegrationResourcePropertyTargetProcessingProperties.builder()
//  .connectionName(java.lang.String)
//  .eventBusArn(java.lang.String)
//  .kmsArn(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | The Glue network connection to configure the Glue job running in the customer VPC. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | The ARN of an Eventbridge event bus to receive the integration status notification. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn">kmsArn</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used for encryption. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The IAM role to access the Glue database. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

The Glue network connection to configure the Glue job running in the customer VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#connection_name GlueIntegrationResourceProperty#connection_name}

---

##### `eventBusArn`<sup>Optional</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

The ARN of an Eventbridge event bus to receive the integration status notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#event_bus_arn GlueIntegrationResourceProperty#event_bus_arn}

---

##### `kmsArn`<sup>Optional</sup> <a name="kmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.kmsArn"></a>

```java
public java.lang.String getKmsArn();
```

- *Type:* java.lang.String

The ARN of the KMS key used for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#kms_arn GlueIntegrationResourceProperty#kms_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The IAM role to access the Glue database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_integration_resource_property#role_arn GlueIntegrationResourceProperty#role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference;

new GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueIntegrationResourcePropertySourceProcessingProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertySourceProcessingProperties">GlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### GlueIntegrationResourcePropertyTagsList <a name="GlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyTagsList;

new GlueIntegrationResourcePropertyTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get"></a>

```java
public GlueIntegrationResourcePropertyTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueIntegrationResourcePropertyTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>>

---


### GlueIntegrationResourcePropertyTagsOutputReference <a name="GlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyTagsOutputReference;

new GlueIntegrationResourcePropertyTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueIntegrationResourcePropertyTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTags">GlueIntegrationResourcePropertyTags</a>

---


### GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_integration_resource_property.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference;

new GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn">resetEventBusArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn">resetKmsArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetConnectionName"></a>

```java
public void resetConnectionName()
```

##### `resetEventBusArn` <a name="resetEventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetEventBusArn"></a>

```java
public void resetEventBusArn()
```

##### `resetKmsArn` <a name="resetKmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetKmsArn"></a>

```java
public void resetKmsArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput">eventBusArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput">kmsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">connectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">eventBusArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">kmsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionNameInput"></a>

```java
public java.lang.String getConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `eventBusArnInput`<sup>Optional</sup> <a name="eventBusArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArnInput"></a>

```java
public java.lang.String getEventBusArnInput();
```

- *Type:* java.lang.String

---

##### `kmsArnInput`<sup>Optional</sup> <a name="kmsArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArnInput"></a>

```java
public java.lang.String getKmsArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```java
public java.lang.String getConnectionName();
```

- *Type:* java.lang.String

---

##### `eventBusArn`<sup>Required</sup> <a name="eventBusArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```java
public java.lang.String getEventBusArn();
```

- *Type:* java.lang.String

---

##### `kmsArn`<sup>Required</sup> <a name="kmsArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```java
public java.lang.String getKmsArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueIntegrationResourcePropertyTargetProcessingProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueIntegrationResourceProperty.GlueIntegrationResourcePropertyTargetProcessingProperties">GlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



