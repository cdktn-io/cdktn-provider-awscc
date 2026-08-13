# `sesMultiRegionEndpoint` Submodule <a name="`sesMultiRegionEndpoint` Submodule" id="@cdktn/provider-awscc.sesMultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMultiRegionEndpoint <a name="SesMultiRegionEndpoint" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint awscc_ses_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpoint;

SesMultiRegionEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .details(SesMultiRegionEndpointDetails)
    .endpointName(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMultiRegionEndpointTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a></code> | Contains details of a multi-region endpoint (global-endpoint) being created. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the multi-region endpoint (global-endpoint). |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>></code> | An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

Contains details of a multi-region endpoint (global-endpoint) being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#details SesMultiRegionEndpoint#details}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.endpointName"></a>

- *Type:* java.lang.String

The name of the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#endpoint_name SesMultiRegionEndpoint#endpoint_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>>

An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#tags SesMultiRegionEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails"></a>

```java
public void putDetails(SesMultiRegionEndpointDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SesMultiRegionEndpointTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SesMultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpoint;

SesMultiRegionEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpoint;

SesMultiRegionEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpoint;

SesMultiRegionEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpoint;

SesMultiRegionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SesMultiRegionEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SesMultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SesMultiRegionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SesMultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SesMultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference">SesMultiRegionEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList">SesMultiRegionEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.detailsInput">detailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.details"></a>

```java
public SesMultiRegionEndpointDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference">SesMultiRegionEndpointDetailsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tags"></a>

```java
public SesMultiRegionEndpointTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList">SesMultiRegionEndpointTagsList</a>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.detailsInput"></a>

```java
public IResolvable|SesMultiRegionEndpointDetails getDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointNameInput"></a>

```java
public java.lang.String getEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SesMultiRegionEndpointConfig <a name="SesMultiRegionEndpointConfig" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointConfig;

SesMultiRegionEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .details(SesMultiRegionEndpointDetails)
    .endpointName(java.lang.String)
//  .tags(IResolvable|java.util.List<SesMultiRegionEndpointTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.details">details</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a></code> | Contains details of a multi-region endpoint (global-endpoint) being created. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.endpointName">endpointName</a></code> | <code>java.lang.String</code> | The name of the multi-region endpoint (global-endpoint). |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>></code> | An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.details"></a>

```java
public SesMultiRegionEndpointDetails getDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

Contains details of a multi-region endpoint (global-endpoint) being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#details SesMultiRegionEndpoint#details}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.endpointName"></a>

```java
public java.lang.String getEndpointName();
```

- *Type:* java.lang.String

The name of the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#endpoint_name SesMultiRegionEndpoint#endpoint_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>>

An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#tags SesMultiRegionEndpoint#tags}

---

### SesMultiRegionEndpointDetails <a name="SesMultiRegionEndpointDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointDetails;

SesMultiRegionEndpointDetails.builder()
    .routeDetails(IResolvable|java.util.List<SesMultiRegionEndpointDetailsRouteDetails>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.property.routeDetails">routeDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>></code> | A list of route configuration details. Must contain exactly one route configuration. |

---

##### `routeDetails`<sup>Required</sup> <a name="routeDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.property.routeDetails"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointDetailsRouteDetails> getRouteDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>>

A list of route configuration details. Must contain exactly one route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#route_details SesMultiRegionEndpoint#route_details}

---

### SesMultiRegionEndpointDetailsRouteDetails <a name="SesMultiRegionEndpointDetailsRouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointDetailsRouteDetails;

SesMultiRegionEndpointDetailsRouteDetails.builder()
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.property.region">region</a></code> | <code>java.lang.String</code> | The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint). |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#region SesMultiRegionEndpoint#region}

---

### SesMultiRegionEndpointTags <a name="SesMultiRegionEndpointTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointTags;

SesMultiRegionEndpointTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.key">key</a></code> | <code>java.lang.String</code> | One part of a key-value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.value">value</a></code> | <code>java.lang.String</code> | The optional part of a key-value pair that defines a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

One part of a key-value pair that defines a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#key SesMultiRegionEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The optional part of a key-value pair that defines a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ses_multi_region_endpoint#value SesMultiRegionEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesMultiRegionEndpointDetailsOutputReference <a name="SesMultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointDetailsOutputReference;

new SesMultiRegionEndpointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails">putRouteDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRouteDetails` <a name="putRouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails"></a>

```java
public void putRouteDetails(IResolvable|java.util.List<SesMultiRegionEndpointDetailsRouteDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetails">routeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList">SesMultiRegionEndpointDetailsRouteDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetailsInput">routeDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `routeDetails`<sup>Required</sup> <a name="routeDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetails"></a>

```java
public SesMultiRegionEndpointDetailsRouteDetailsList getRouteDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList">SesMultiRegionEndpointDetailsRouteDetailsList</a>

---

##### `routeDetailsInput`<sup>Optional</sup> <a name="routeDetailsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetailsInput"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointDetailsRouteDetails> getRouteDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMultiRegionEndpointDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

---


### SesMultiRegionEndpointDetailsRouteDetailsList <a name="SesMultiRegionEndpointDetailsRouteDetailsList" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointDetailsRouteDetailsList;

new SesMultiRegionEndpointDetailsRouteDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get"></a>

```java
public SesMultiRegionEndpointDetailsRouteDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointDetailsRouteDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>>

---


### SesMultiRegionEndpointDetailsRouteDetailsOutputReference <a name="SesMultiRegionEndpointDetailsRouteDetailsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference;

new SesMultiRegionEndpointDetailsRouteDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMultiRegionEndpointDetailsRouteDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails">SesMultiRegionEndpointDetailsRouteDetails</a>

---


### SesMultiRegionEndpointTagsList <a name="SesMultiRegionEndpointTagsList" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointTagsList;

new SesMultiRegionEndpointTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get"></a>

```java
public SesMultiRegionEndpointTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SesMultiRegionEndpointTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>>

---


### SesMultiRegionEndpointTagsOutputReference <a name="SesMultiRegionEndpointTagsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ses_multi_region_endpoint.SesMultiRegionEndpointTagsOutputReference;

new SesMultiRegionEndpointTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SesMultiRegionEndpointTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags">SesMultiRegionEndpointTags</a>

---



