# `mediatailorSourceLocation` Submodule <a name="`mediatailorSourceLocation` Submodule" id="@cdktn/provider-awscc.mediatailorSourceLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorSourceLocation <a name="MediatailorSourceLocation" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocation;

MediatailorSourceLocation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .httpConfiguration(MediatailorSourceLocationHttpConfiguration)
    .sourceLocationName(java.lang.String)
//  .accessConfiguration(MediatailorSourceLocationAccessConfiguration)
//  .defaultSegmentDeliveryConfiguration(MediatailorSourceLocationDefaultSegmentDeliveryConfiguration)
//  .segmentDeliveryConfigurations(IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations>)
//  .tags(IResolvable|java.util.List<MediatailorSourceLocationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.httpConfiguration">httpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.accessConfiguration">accessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.defaultSegmentDeliveryConfiguration">defaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.segmentDeliveryConfigurations">segmentDeliveryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>></code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>></code> | The tags to assign to the source location. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpConfiguration`<sup>Required</sup> <a name="httpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.httpConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.sourceLocationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `accessConfiguration`<sup>Optional</sup> <a name="accessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.accessConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `defaultSegmentDeliveryConfiguration`<sup>Optional</sup> <a name="defaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.defaultSegmentDeliveryConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `segmentDeliveryConfigurations`<sup>Optional</sup> <a name="segmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.segmentDeliveryConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>>

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>>

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration">putAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration">putDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration">putHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations">putSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration">resetAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration">resetDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations">resetSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessConfiguration` <a name="putAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration"></a>

```java
public void putAccessConfiguration(MediatailorSourceLocationAccessConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `putDefaultSegmentDeliveryConfiguration` <a name="putDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration"></a>

```java
public void putDefaultSegmentDeliveryConfiguration(MediatailorSourceLocationDefaultSegmentDeliveryConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `putHttpConfiguration` <a name="putHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration"></a>

```java
public void putHttpConfiguration(MediatailorSourceLocationHttpConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `putSegmentDeliveryConfigurations` <a name="putSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations"></a>

```java
public void putSegmentDeliveryConfigurations(IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<MediatailorSourceLocationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>>

---

##### `resetAccessConfiguration` <a name="resetAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration"></a>

```java
public void resetAccessConfiguration()
```

##### `resetDefaultSegmentDeliveryConfiguration` <a name="resetDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration"></a>

```java
public void resetDefaultSegmentDeliveryConfiguration()
```

##### `resetSegmentDeliveryConfigurations` <a name="resetSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations"></a>

```java
public void resetSegmentDeliveryConfigurations()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocation;

MediatailorSourceLocation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocation;

MediatailorSourceLocation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocation;

MediatailorSourceLocation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocation;

MediatailorSourceLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediatailorSourceLocation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediatailorSourceLocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediatailorSourceLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorSourceLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration">accessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration">defaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration">httpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations">segmentDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput">accessConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput">defaultSegmentDeliveryConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput">httpConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput">segmentDeliveryConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput">sourceLocationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accessConfiguration`<sup>Required</sup> <a name="accessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration"></a>

```java
public MediatailorSourceLocationAccessConfigurationOutputReference getAccessConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultSegmentDeliveryConfiguration`<sup>Required</sup> <a name="defaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration"></a>

```java
public MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference getDefaultSegmentDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a>

---

##### `httpConfiguration`<sup>Required</sup> <a name="httpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration"></a>

```java
public MediatailorSourceLocationHttpConfigurationOutputReference getHttpConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `segmentDeliveryConfigurations`<sup>Required</sup> <a name="segmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations"></a>

```java
public MediatailorSourceLocationSegmentDeliveryConfigurationsList getSegmentDeliveryConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags"></a>

```java
public MediatailorSourceLocationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a>

---

##### `accessConfigurationInput`<sup>Optional</sup> <a name="accessConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput"></a>

```java
public IResolvable|MediatailorSourceLocationAccessConfiguration getAccessConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `defaultSegmentDeliveryConfigurationInput`<sup>Optional</sup> <a name="defaultSegmentDeliveryConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput"></a>

```java
public IResolvable|MediatailorSourceLocationDefaultSegmentDeliveryConfiguration getDefaultSegmentDeliveryConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `httpConfigurationInput`<sup>Optional</sup> <a name="httpConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput"></a>

```java
public IResolvable|MediatailorSourceLocationHttpConfiguration getHttpConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `segmentDeliveryConfigurationsInput`<sup>Optional</sup> <a name="segmentDeliveryConfigurationsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations> getSegmentDeliveryConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>>

---

##### `sourceLocationNameInput`<sup>Optional</sup> <a name="sourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput"></a>

```java
public java.lang.String getSourceLocationNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>>

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorSourceLocationAccessConfiguration <a name="MediatailorSourceLocationAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationAccessConfiguration;

MediatailorSourceLocationAccessConfiguration.builder()
//  .accessType(java.lang.String)
//  .secretsManagerAccessTokenConfiguration(MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType">accessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration">secretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | <p>AWS Secrets Manager access token configuration parameters. |

---

##### `accessType`<sup>Optional</sup> <a name="accessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}.

---

##### `secretsManagerAccessTokenConfiguration`<sup>Optional</sup> <a name="secretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration"></a>

```java
public MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration getSecretsManagerAccessTokenConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

<p>AWS Secrets Manager access token configuration parameters.

For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}

---

### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration;

MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.builder()
//  .headerName(java.lang.String)
//  .secretArn(java.lang.String)
//  .secretStringKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName">headerName</a></code> | <code>java.lang.String</code> | <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey">secretStringKey</a></code> | <code>java.lang.String</code> | <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}

---

##### `secretStringKey`<sup>Optional</sup> <a name="secretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey"></a>

```java
public java.lang.String getSecretStringKey();
```

- *Type:* java.lang.String

<p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}

---

### MediatailorSourceLocationConfig <a name="MediatailorSourceLocationConfig" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationConfig;

MediatailorSourceLocationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .httpConfiguration(MediatailorSourceLocationHttpConfiguration)
    .sourceLocationName(java.lang.String)
//  .accessConfiguration(MediatailorSourceLocationAccessConfiguration)
//  .defaultSegmentDeliveryConfiguration(MediatailorSourceLocationDefaultSegmentDeliveryConfiguration)
//  .segmentDeliveryConfigurations(IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations>)
//  .tags(IResolvable|java.util.List<MediatailorSourceLocationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration">httpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName">sourceLocationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration">accessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration">defaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations">segmentDeliveryConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>></code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>></code> | The tags to assign to the source location. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpConfiguration`<sup>Required</sup> <a name="httpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration"></a>

```java
public MediatailorSourceLocationHttpConfiguration getHttpConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName"></a>

```java
public java.lang.String getSourceLocationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `accessConfiguration`<sup>Optional</sup> <a name="accessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration"></a>

```java
public MediatailorSourceLocationAccessConfiguration getAccessConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `defaultSegmentDeliveryConfiguration`<sup>Optional</sup> <a name="defaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration"></a>

```java
public MediatailorSourceLocationDefaultSegmentDeliveryConfiguration getDefaultSegmentDeliveryConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `segmentDeliveryConfigurations`<sup>Optional</sup> <a name="segmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations> getSegmentDeliveryConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>>

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>>

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

### MediatailorSourceLocationDefaultSegmentDeliveryConfiguration <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration;

MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.builder()
//  .baseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | <p>The hostname of the server that will be used to serve segments. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

<p>The hostname of the server that will be used to serve segments.

This string must include the protocol, such as <b>https://</b>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationHttpConfiguration <a name="MediatailorSourceLocationHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationHttpConfiguration;

MediatailorSourceLocationHttpConfiguration.builder()
    .baseUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>. |

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationSegmentDeliveryConfigurations <a name="MediatailorSourceLocationSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationSegmentDeliveryConfigurations;

MediatailorSourceLocationSegmentDeliveryConfigurations.builder()
//  .baseUrl(java.lang.String)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name">name</a></code> | <code>java.lang.String</code> | <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>. |

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

<p>The base URL of the host or path of the segment delivery server that you're using to serve segments.

This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

<p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#name MediatailorSourceLocation#name}

---

### MediatailorSourceLocationTags <a name="MediatailorSourceLocationTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationTags;

MediatailorSourceLocationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorSourceLocationAccessConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationAccessConfigurationOutputReference;

new MediatailorSourceLocationAccessConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration">putSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType">resetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration">resetSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretsManagerAccessTokenConfiguration` <a name="putSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration"></a>

```java
public void putSecretsManagerAccessTokenConfiguration(MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `resetAccessType` <a name="resetAccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType"></a>

```java
public void resetAccessType()
```

##### `resetSecretsManagerAccessTokenConfiguration` <a name="resetSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration"></a>

```java
public void resetSecretsManagerAccessTokenConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration">secretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput">secretsManagerAccessTokenConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessTokenConfiguration`<sup>Required</sup> <a name="secretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration"></a>

```java
public MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference getSecretsManagerAccessTokenConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a>

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `secretsManagerAccessTokenConfigurationInput`<sup>Optional</sup> <a name="secretsManagerAccessTokenConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput"></a>

```java
public IResolvable|MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration getSecretsManagerAccessTokenConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationAccessConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---


### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference;

new MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey">resetSecretStringKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName"></a>

```java
public void resetHeaderName()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetSecretStringKey` <a name="resetSecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey"></a>

```java
public void resetSecretStringKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput">secretStringKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey">secretStringKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `secretStringKeyInput`<sup>Optional</sup> <a name="secretStringKeyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput"></a>

```java
public java.lang.String getSecretStringKeyInput();
```

- *Type:* java.lang.String

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `secretStringKey`<sup>Required</sup> <a name="secretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey"></a>

```java
public java.lang.String getSecretStringKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---


### MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference;

new MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationDefaultSegmentDeliveryConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---


### MediatailorSourceLocationHttpConfigurationOutputReference <a name="MediatailorSourceLocationHttpConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationHttpConfigurationOutputReference;

new MediatailorSourceLocationHttpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationHttpConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsList <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationSegmentDeliveryConfigurationsList;

new MediatailorSourceLocationSegmentDeliveryConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get"></a>

```java
public MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationSegmentDeliveryConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>>

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference;

new MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>

---


### MediatailorSourceLocationTagsList <a name="MediatailorSourceLocationTagsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationTagsList;

new MediatailorSourceLocationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get"></a>

```java
public MediatailorSourceLocationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MediatailorSourceLocationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>>

---


### MediatailorSourceLocationTagsOutputReference <a name="MediatailorSourceLocationTagsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.mediatailor_source_location.MediatailorSourceLocationTagsOutputReference;

new MediatailorSourceLocationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|MediatailorSourceLocationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>

---



