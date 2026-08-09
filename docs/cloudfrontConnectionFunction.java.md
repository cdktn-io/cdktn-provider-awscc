# `cloudfrontConnectionFunction` Submodule <a name="`cloudfrontConnectionFunction` Submodule" id="@cdktn/provider-awscc.cloudfrontConnectionFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontConnectionFunction <a name="CloudfrontConnectionFunction" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function awscc_cloudfront_connection_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunction;

CloudfrontConnectionFunction.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionFunctionCode(java.lang.String)
    .connectionFunctionConfig(CloudfrontConnectionFunctionConnectionFunctionConfig)
    .name(java.lang.String)
//  .autoPublish(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<CloudfrontConnectionFunctionTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connectionFunctionCode">connectionFunctionCode</a></code> | <code>java.lang.String</code> | The code for the connection function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | Contains configuration information about a CloudFront function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The connection function name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.autoPublish">autoPublish</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connectionFunctionCode"></a>

- *Type:* java.lang.String

The code for the connection function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}

---

##### `connectionFunctionConfig`<sup>Required</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.connectionFunctionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

Contains configuration information about a CloudFront function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_config CloudfrontConnectionFunction#connection_function_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The connection function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}

---

##### `autoPublish`<sup>Optional</sup> <a name="autoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.autoPublish"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#auto_publish CloudfrontConnectionFunction#auto_publish}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig">putConnectionFunctionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetAutoPublish">resetAutoPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionFunctionConfig` <a name="putConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig"></a>

```java
public void putConnectionFunctionConfig(CloudfrontConnectionFunctionConnectionFunctionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CloudfrontConnectionFunctionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>>

---

##### `resetAutoPublish` <a name="resetAutoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetAutoPublish"></a>

```java
public void resetAutoPublish()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunction;

CloudfrontConnectionFunction.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunction;

CloudfrontConnectionFunction.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunction;

CloudfrontConnectionFunction.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunction;

CloudfrontConnectionFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontConnectionFunction.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontConnectionFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontConnectionFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontConnectionFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontConnectionFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn">connectionFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionId">connectionFunctionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.eTag">eTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList">CloudfrontConnectionFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublishInput">autoPublishInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput">connectionFunctionCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput">connectionFunctionConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublish">autoPublish</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode">connectionFunctionCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionFunctionArn`<sup>Required</sup> <a name="connectionFunctionArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn"></a>

```java
public java.lang.String getConnectionFunctionArn();
```

- *Type:* java.lang.String

---

##### `connectionFunctionConfig`<sup>Required</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig"></a>

```java
public CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference getConnectionFunctionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference">CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference</a>

---

##### `connectionFunctionId`<sup>Required</sup> <a name="connectionFunctionId" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionId"></a>

```java
public java.lang.String getConnectionFunctionId();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.eTag"></a>

```java
public java.lang.String getETag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags"></a>

```java
public CloudfrontConnectionFunctionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList">CloudfrontConnectionFunctionTagsList</a>

---

##### `autoPublishInput`<sup>Optional</sup> <a name="autoPublishInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublishInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoPublishInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectionFunctionCodeInput`<sup>Optional</sup> <a name="connectionFunctionCodeInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput"></a>

```java
public java.lang.String getConnectionFunctionCodeInput();
```

- *Type:* java.lang.String

---

##### `connectionFunctionConfigInput`<sup>Optional</sup> <a name="connectionFunctionConfigInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput"></a>

```java
public IResolvable|CloudfrontConnectionFunctionConnectionFunctionConfig getConnectionFunctionConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>>

---

##### `autoPublish`<sup>Required</sup> <a name="autoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.autoPublish"></a>

```java
public java.lang.Boolean|IResolvable getAutoPublish();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode"></a>

```java
public java.lang.String getConnectionFunctionCode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConfig;

CloudfrontConnectionFunctionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionFunctionCode(java.lang.String)
    .connectionFunctionConfig(CloudfrontConnectionFunctionConnectionFunctionConfig)
    .name(java.lang.String)
//  .autoPublish(java.lang.Boolean|IResolvable)
//  .tags(IResolvable|java.util.List<CloudfrontConnectionFunctionTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode">connectionFunctionCode</a></code> | <code>java.lang.String</code> | The code for the connection function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | Contains configuration information about a CloudFront function. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The connection function name. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.autoPublish">autoPublish</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>></code> | A complex type that contains zero or more ``Tag`` elements. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode"></a>

```java
public java.lang.String getConnectionFunctionCode();
```

- *Type:* java.lang.String

The code for the connection function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}

---

##### `connectionFunctionConfig`<sup>Required</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig"></a>

```java
public CloudfrontConnectionFunctionConnectionFunctionConfig getConnectionFunctionConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

Contains configuration information about a CloudFront function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#connection_function_config CloudfrontConnectionFunction#connection_function_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The connection function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}

---

##### `autoPublish`<sup>Optional</sup> <a name="autoPublish" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.autoPublish"></a>

```java
public java.lang.Boolean|IResolvable getAutoPublish();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#auto_publish CloudfrontConnectionFunction#auto_publish}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>>

A complex type that contains zero or more ``Tag`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}

---

### CloudfrontConnectionFunctionConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConnectionFunctionConfig" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConnectionFunctionConfig;

CloudfrontConnectionFunctionConnectionFunctionConfig.builder()
    .comment(java.lang.String)
    .runtime(java.lang.String)
//  .keyValueStoreAssociations(IResolvable|java.util.List<CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment to describe the function. The comment cannot be longer than 128 characters. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime">runtime</a></code> | <code>java.lang.String</code> | The function's runtime environment version. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociations">keyValueStoreAssociations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>></code> | The configuration for the key value store associations. |

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment to describe the function. The comment cannot be longer than 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#comment CloudfrontConnectionFunction#comment}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

The function's runtime environment version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#runtime CloudfrontConnectionFunction#runtime}

---

##### `keyValueStoreAssociations`<sup>Optional</sup> <a name="keyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociations"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations> getKeyValueStoreAssociations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>>

The configuration for the key value store associations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#key_value_store_associations CloudfrontConnectionFunction#key_value_store_associations}

---

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations;

CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.builder()
//  .keyValueStoreArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the key value store association. |

---

##### `keyValueStoreArn`<sup>Optional</sup> <a name="keyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the key value store association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/cloudfront_connection_function#key_value_store_arn CloudfrontConnectionFunction#key_value_store_arn}

---

### CloudfrontConnectionFunctionTags <a name="CloudfrontConnectionFunctionTags" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionTags;

CloudfrontConnectionFunctionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.key">key</a></code> | <code>java.lang.String</code> | A string that contains ``Tag`` key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.value">value</a></code> | <code>java.lang.String</code> | A string that contains an optional ``Tag`` value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A string that contains ``Tag`` key.

The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

A string that contains an optional ``Tag`` value.

The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters ``_ - . : / = +

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList;

new CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get"></a>

```java
public CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>>

---


### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference;

new CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resetKeyValueStoreArn">resetKeyValueStoreArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyValueStoreArn` <a name="resetKeyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.resetKeyValueStoreArn"></a>

```java
public void resetKeyValueStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArnInput">keyValueStoreArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyValueStoreArnInput`<sup>Optional</sup> <a name="keyValueStoreArnInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArnInput"></a>

```java
public java.lang.String getKeyValueStoreArnInput();
```

- *Type:* java.lang.String

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.keyValueStoreArn"></a>

```java
public java.lang.String getKeyValueStoreArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>

---


### CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference;

new CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations">putKeyValueStoreAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociations">resetKeyValueStoreAssociations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyValueStoreAssociations` <a name="putKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations"></a>

```java
public void putKeyValueStoreAssociations(IResolvable|java.util.List<CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>>

---

##### `resetKeyValueStoreAssociations` <a name="resetKeyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociations"></a>

```java
public void resetKeyValueStoreAssociations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations">keyValueStoreAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationsInput">keyValueStoreAssociationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyValueStoreAssociations`<sup>Required</sup> <a name="keyValueStoreAssociations" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociations"></a>

```java
public CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList getKeyValueStoreAssociations();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationsList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `keyValueStoreAssociationsInput`<sup>Optional</sup> <a name="keyValueStoreAssociationsInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations> getKeyValueStoreAssociationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociations</a>>

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput"></a>

```java
public java.lang.String getRuntimeInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontConnectionFunctionConnectionFunctionConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

---


### CloudfrontConnectionFunctionTagsList <a name="CloudfrontConnectionFunctionTagsList" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionTagsList;

new CloudfrontConnectionFunctionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get"></a>

```java
public CloudfrontConnectionFunctionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontConnectionFunctionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>>

---


### CloudfrontConnectionFunctionTagsOutputReference <a name="CloudfrontConnectionFunctionTagsOutputReference" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_connection_function.CloudfrontConnectionFunctionTagsOutputReference;

new CloudfrontConnectionFunctionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontConnectionFunctionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontConnectionFunction.CloudfrontConnectionFunctionTags">CloudfrontConnectionFunctionTags</a>

---



