# `mediapackagev2OriginEndpoint` Submodule <a name="`mediapackagev2OriginEndpoint` Submodule" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mediapackagev2OriginEndpoint <a name="Mediapackagev2OriginEndpoint" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint awscc_mediapackagev2_origin_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpoint(scope Construct, id *string, config Mediapackagev2OriginEndpointConfig) Mediapackagev2OriginEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig">Mediapackagev2OriginEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig">Mediapackagev2OriginEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests">PutDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration">PutForceEndpointErrorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests">PutHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests">PutLowLatencyHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests">PutMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment">PutSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDashManifests">ResetDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetForceEndpointErrorConfiguration">ResetForceEndpointErrorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetHlsManifests">ResetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetLowLatencyHlsManifests">ResetLowLatencyHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetMssManifests">ResetMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetSegment">ResetSegment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetStartoverWindowSeconds">ResetStartoverWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetUriSeparator">ResetUriSeparator</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDashManifests` <a name="PutDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests"></a>

```go
func PutDashManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putDashManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutForceEndpointErrorConfiguration` <a name="PutForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration"></a>

```go
func PutForceEndpointErrorConfiguration(value Mediapackagev2OriginEndpointForceEndpointErrorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putForceEndpointErrorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

---

##### `PutHlsManifests` <a name="PutHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests"></a>

```go
func PutHlsManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putHlsManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLowLatencyHlsManifests` <a name="PutLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests"></a>

```go
func PutLowLatencyHlsManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putLowLatencyHlsManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMssManifests` <a name="PutMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests"></a>

```go
func PutMssManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putMssManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSegment` <a name="PutSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment"></a>

```go
func PutSegment(value Mediapackagev2OriginEndpointSegment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putSegment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDashManifests` <a name="ResetDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDashManifests"></a>

```go
func ResetDashManifests()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetForceEndpointErrorConfiguration` <a name="ResetForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetForceEndpointErrorConfiguration"></a>

```go
func ResetForceEndpointErrorConfiguration()
```

##### `ResetHlsManifests` <a name="ResetHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetHlsManifests"></a>

```go
func ResetHlsManifests()
```

##### `ResetLowLatencyHlsManifests` <a name="ResetLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetLowLatencyHlsManifests"></a>

```go
func ResetLowLatencyHlsManifests()
```

##### `ResetMssManifests` <a name="ResetMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetMssManifests"></a>

```go
func ResetMssManifests()
```

##### `ResetSegment` <a name="ResetSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetSegment"></a>

```go
func ResetSegment()
```

##### `ResetStartoverWindowSeconds` <a name="ResetStartoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetStartoverWindowSeconds"></a>

```go
func ResetStartoverWindowSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUriSeparator` <a name="ResetUriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.resetUriSeparator"></a>

```go
func ResetUriSeparator()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Mediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.Mediapackagev2OriginEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.Mediapackagev2OriginEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.Mediapackagev2OriginEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.Mediapackagev2OriginEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Mediapackagev2OriginEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Mediapackagev2OriginEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Mediapackagev2OriginEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Mediapackagev2OriginEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList">Mediapackagev2OriginEndpointDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestUrls">DashManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration">ForceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList">Mediapackagev2OriginEndpointHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestUrls">HlsManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifests">LowLatencyHlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList">Mediapackagev2OriginEndpointLowLatencyHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls">LowLatencyHlsManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList">Mediapackagev2OriginEndpointMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestUrls">MssManifestUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segment">Segment</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference">Mediapackagev2OriginEndpointSegmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList">Mediapackagev2OriginEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupNameInput">ChannelGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerTypeInput">ContainerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestsInput">DashManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfigurationInput">ForceEndpointErrorConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestsInput">HlsManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestsInput">LowLatencyHlsManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestsInput">MssManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointNameInput">OriginEndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segmentInput">SegmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSecondsInput">StartoverWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparatorInput">UriSeparatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupName">ChannelGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerType">ContainerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointName">OriginEndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSeconds">StartoverWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparator">UriSeparator</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifests"></a>

```go
func DashManifests() Mediapackagev2OriginEndpointDashManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList">Mediapackagev2OriginEndpointDashManifestsList</a>

---

##### `DashManifestUrls`<sup>Required</sup> <a name="DashManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestUrls"></a>

```go
func DashManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ForceEndpointErrorConfiguration`<sup>Required</sup> <a name="ForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfiguration"></a>

```go
func ForceEndpointErrorConfiguration() Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference">Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifests"></a>

```go
func HlsManifests() Mediapackagev2OriginEndpointHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList">Mediapackagev2OriginEndpointHlsManifestsList</a>

---

##### `HlsManifestUrls`<sup>Required</sup> <a name="HlsManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestUrls"></a>

```go
func HlsManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LowLatencyHlsManifests`<sup>Required</sup> <a name="LowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifests"></a>

```go
func LowLatencyHlsManifests() Mediapackagev2OriginEndpointLowLatencyHlsManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList">Mediapackagev2OriginEndpointLowLatencyHlsManifestsList</a>

---

##### `LowLatencyHlsManifestUrls`<sup>Required</sup> <a name="LowLatencyHlsManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestUrls"></a>

```go
func LowLatencyHlsManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifests"></a>

```go
func MssManifests() Mediapackagev2OriginEndpointMssManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList">Mediapackagev2OriginEndpointMssManifestsList</a>

---

##### `MssManifestUrls`<sup>Required</sup> <a name="MssManifestUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestUrls"></a>

```go
func MssManifestUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Segment`<sup>Required</sup> <a name="Segment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segment"></a>

```go
func Segment() Mediapackagev2OriginEndpointSegmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference">Mediapackagev2OriginEndpointSegmentOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tags"></a>

```go
func Tags() Mediapackagev2OriginEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList">Mediapackagev2OriginEndpointTagsList</a>

---

##### `ChannelGroupNameInput`<sup>Optional</sup> <a name="ChannelGroupNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupNameInput"></a>

```go
func ChannelGroupNameInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ContainerTypeInput`<sup>Optional</sup> <a name="ContainerTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerTypeInput"></a>

```go
func ContainerTypeInput() *string
```

- *Type:* *string

---

##### `DashManifestsInput`<sup>Optional</sup> <a name="DashManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.dashManifestsInput"></a>

```go
func DashManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ForceEndpointErrorConfigurationInput`<sup>Optional</sup> <a name="ForceEndpointErrorConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.forceEndpointErrorConfigurationInput"></a>

```go
func ForceEndpointErrorConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `HlsManifestsInput`<sup>Optional</sup> <a name="HlsManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.hlsManifestsInput"></a>

```go
func HlsManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `LowLatencyHlsManifestsInput`<sup>Optional</sup> <a name="LowLatencyHlsManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.lowLatencyHlsManifestsInput"></a>

```go
func LowLatencyHlsManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `MssManifestsInput`<sup>Optional</sup> <a name="MssManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.mssManifestsInput"></a>

```go
func MssManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `OriginEndpointNameInput`<sup>Optional</sup> <a name="OriginEndpointNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointNameInput"></a>

```go
func OriginEndpointNameInput() *string
```

- *Type:* *string

---

##### `SegmentInput`<sup>Optional</sup> <a name="SegmentInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.segmentInput"></a>

```go
func SegmentInput() interface{}
```

- *Type:* interface{}

---

##### `StartoverWindowSecondsInput`<sup>Optional</sup> <a name="StartoverWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSecondsInput"></a>

```go
func StartoverWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UriSeparatorInput`<sup>Optional</sup> <a name="UriSeparatorInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparatorInput"></a>

```go
func UriSeparatorInput() *string
```

- *Type:* *string

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelGroupName"></a>

```go
func ChannelGroupName() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.containerType"></a>

```go
func ContainerType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.originEndpointName"></a>

```go
func OriginEndpointName() *string
```

- *Type:* *string

---

##### `StartoverWindowSeconds`<sup>Required</sup> <a name="StartoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.startoverWindowSeconds"></a>

```go
func StartoverWindowSeconds() *f64
```

- *Type:* *f64

---

##### `UriSeparator`<sup>Required</sup> <a name="UriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.uriSeparator"></a>

```go
func UriSeparator() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2OriginEndpointConfig <a name="Mediapackagev2OriginEndpointConfig" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelGroupName: *string,
	ChannelName: *string,
	ContainerType: *string,
	OriginEndpointName: *string,
	DashManifests: interface{},
	Description: *string,
	ForceEndpointErrorConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration,
	HlsManifests: interface{},
	LowLatencyHlsManifests: interface{},
	MssManifests: interface{},
	Segment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment,
	StartoverWindowSeconds: *f64,
	Tags: interface{},
	UriSeparator: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelGroupName">ChannelGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#channel_group_name Mediapackagev2OriginEndpoint#channel_group_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelName">ChannelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#channel_name Mediapackagev2OriginEndpoint#channel_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.containerType">ContainerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#container_type Mediapackagev2OriginEndpoint#container_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.originEndpointName">OriginEndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#origin_endpoint_name Mediapackagev2OriginEndpoint#origin_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dashManifests">DashManifests</a></code> | <code>interface{}</code> | <p>A DASH manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.description">Description</a></code> | <code>*string</code> | <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forceEndpointErrorConfiguration">ForceEndpointErrorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a></code> | <p>The failover settings for the endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.hlsManifests">HlsManifests</a></code> | <code>interface{}</code> | <p>An HTTP live streaming (HLS) manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lowLatencyHlsManifests">LowLatencyHlsManifests</a></code> | <code>interface{}</code> | <p>A low-latency HLS manifest configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.mssManifests">MssManifests</a></code> | <code>interface{}</code> | <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.segment">Segment</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a></code> | <p>The segment configuration, including the segment name, duration, and other configuration values.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.startoverWindowSeconds">StartoverWindowSeconds</a></code> | <code>*f64</code> | <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#tags Mediapackagev2OriginEndpoint#tags}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.uriSeparator">UriSeparator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_separator Mediapackagev2OriginEndpoint#uri_separator}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelGroupName`<sup>Required</sup> <a name="ChannelGroupName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelGroupName"></a>

```go
ChannelGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#channel_group_name Mediapackagev2OriginEndpoint#channel_group_name}.

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#channel_name Mediapackagev2OriginEndpoint#channel_name}.

---

##### `ContainerType`<sup>Required</sup> <a name="ContainerType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.containerType"></a>

```go
ContainerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#container_type Mediapackagev2OriginEndpoint#container_type}.

---

##### `OriginEndpointName`<sup>Required</sup> <a name="OriginEndpointName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.originEndpointName"></a>

```go
OriginEndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#origin_endpoint_name Mediapackagev2OriginEndpoint#origin_endpoint_name}.

---

##### `DashManifests`<sup>Optional</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.dashManifests"></a>

```go
DashManifests interface{}
```

- *Type:* interface{}

<p>A DASH manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#dash_manifests Mediapackagev2OriginEndpoint#dash_manifests}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

<p>Enter any descriptive text that helps you to identify the origin endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#description Mediapackagev2OriginEndpoint#description}

---

##### `ForceEndpointErrorConfiguration`<sup>Optional</sup> <a name="ForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.forceEndpointErrorConfiguration"></a>

```go
ForceEndpointErrorConfiguration Mediapackagev2OriginEndpointForceEndpointErrorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration">Mediapackagev2OriginEndpointForceEndpointErrorConfiguration</a>

<p>The failover settings for the endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#force_endpoint_error_configuration Mediapackagev2OriginEndpoint#force_endpoint_error_configuration}

---

##### `HlsManifests`<sup>Optional</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.hlsManifests"></a>

```go
HlsManifests interface{}
```

- *Type:* interface{}

<p>An HTTP live streaming (HLS) manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#hls_manifests Mediapackagev2OriginEndpoint#hls_manifests}

---

##### `LowLatencyHlsManifests`<sup>Optional</sup> <a name="LowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.lowLatencyHlsManifests"></a>

```go
LowLatencyHlsManifests interface{}
```

- *Type:* interface{}

<p>A low-latency HLS manifest configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#low_latency_hls_manifests Mediapackagev2OriginEndpoint#low_latency_hls_manifests}

---

##### `MssManifests`<sup>Optional</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.mssManifests"></a>

```go
MssManifests interface{}
```

- *Type:* interface{}

<p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#mss_manifests Mediapackagev2OriginEndpoint#mss_manifests}

---

##### `Segment`<sup>Optional</sup> <a name="Segment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.segment"></a>

```go
Segment Mediapackagev2OriginEndpointSegment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment">Mediapackagev2OriginEndpointSegment</a>

<p>The segment configuration, including the segment name, duration, and other configuration values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#segment Mediapackagev2OriginEndpoint#segment}

---

##### `StartoverWindowSeconds`<sup>Optional</sup> <a name="StartoverWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.startoverWindowSeconds"></a>

```go
StartoverWindowSeconds *f64
```

- *Type:* *f64

<p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing.

Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#startover_window_seconds Mediapackagev2OriginEndpoint#startover_window_seconds}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#tags Mediapackagev2OriginEndpoint#tags}.

---

##### `UriSeparator`<sup>Optional</sup> <a name="UriSeparator" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointConfig.property.uriSeparator"></a>

```go
UriSeparator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_separator Mediapackagev2OriginEndpoint#uri_separator}.

---

### Mediapackagev2OriginEndpointDashManifests <a name="Mediapackagev2OriginEndpointDashManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifests {
	AudioTimelinePattern: *string,
	AvailabilityStartTimeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration,
	BaseUrls: interface{},
	Compactness: *string,
	DrmSignaling: *string,
	DvbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings,
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration,
	ManifestName: *string,
	ManifestWindowSeconds: *f64,
	MinBufferTimeSeconds: *f64,
	MinUpdatePeriodSeconds: *f64,
	PeriodTriggers: *[]*string,
	Profiles: *[]*string,
	ProgramInformation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation,
	ScteDash: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash,
	SegmentTemplateFormat: *string,
	SubtitleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration,
	SuggestedPresentationDelaySeconds: *f64,
	UriPathType: *string,
	UtcTiming: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.audioTimelinePattern">AudioTimelinePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#audio_timeline_pattern Mediapackagev2OriginEndpoint#audio_timeline_pattern}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.availabilityStartTimeConfiguration">AvailabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a></code> | <p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD). |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.baseUrls">BaseUrls</a></code> | <code>interface{}</code> | <p>The base URL to use for retrieving segments.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.compactness">Compactness</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#compactness Mediapackagev2OriginEndpoint#compactness}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.drmSignaling">DrmSignaling</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_signaling Mediapackagev2OriginEndpoint#drm_signaling}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.dvbSettings">DvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a></code> | <p>For endpoints that use the DVB-DASH profile only. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>*f64</code> | <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.periodTriggers">PeriodTriggers</a></code> | <code>*[]*string</code> | <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.profiles">Profiles</a></code> | <code>*[]*string</code> | <p>The profile that the output is compliant with.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.programInformation">ProgramInformation</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a></code> | <p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.scteDash">ScteDash</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#segment_template_format Mediapackagev2OriginEndpoint#segment_template_format}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.subtitleConfiguration">SubtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a></code> | <p>The configuration for DASH subtitles.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>*f64</code> | <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.uriPathType">UriPathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.utcTiming">UtcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a></code> | <p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>. |

---

##### `AudioTimelinePattern`<sup>Optional</sup> <a name="AudioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.audioTimelinePattern"></a>

```go
AudioTimelinePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#audio_timeline_pattern Mediapackagev2OriginEndpoint#audio_timeline_pattern}.

---

##### `AvailabilityStartTimeConfiguration`<sup>Optional</sup> <a name="AvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.availabilityStartTimeConfiguration"></a>

```go
AvailabilityStartTimeConfiguration Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

<p>The configuration for the DASH <code>availabilityStartTime</code> attribute of the Media Presentation Description (MPD).

Use this configuration to set a custom availability start time for your DASH manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#availability_start_time_configuration Mediapackagev2OriginEndpoint#availability_start_time_configuration}

---

##### `BaseUrls`<sup>Optional</sup> <a name="BaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.baseUrls"></a>

```go
BaseUrls interface{}
```

- *Type:* interface{}

<p>The base URL to use for retrieving segments.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#base_urls Mediapackagev2OriginEndpoint#base_urls}

---

##### `Compactness`<sup>Optional</sup> <a name="Compactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.compactness"></a>

```go
Compactness *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#compactness Mediapackagev2OriginEndpoint#compactness}.

---

##### `DrmSignaling`<sup>Optional</sup> <a name="DrmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.drmSignaling"></a>

```go
DrmSignaling *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_signaling Mediapackagev2OriginEndpoint#drm_signaling}.

---

##### `DvbSettings`<sup>Optional</sup> <a name="DvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.dvbSettings"></a>

```go
DvbSettings Mediapackagev2OriginEndpointDashManifestsDvbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

<p>For endpoints that use the DVB-DASH profile only.

The font download and error reporting information that you want MediaPackage to pass through to the manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#dvb_settings Mediapackagev2OriginEndpoint#dvb_settings}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.filterConfiguration"></a>

```go
FilterConfiguration Mediapackagev2OriginEndpointDashManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

<p>A short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `MinBufferTimeSeconds`<sup>Optional</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minBufferTimeSeconds"></a>

```go
MinBufferTimeSeconds *f64
```

- *Type:* *f64

<p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#min_buffer_time_seconds Mediapackagev2OriginEndpoint#min_buffer_time_seconds}

---

##### `MinUpdatePeriodSeconds`<sup>Optional</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.minUpdatePeriodSeconds"></a>

```go
MinUpdatePeriodSeconds *f64
```

- *Type:* *f64

<p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#min_update_period_seconds Mediapackagev2OriginEndpoint#min_update_period_seconds}

---

##### `PeriodTriggers`<sup>Optional</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.periodTriggers"></a>

```go
PeriodTriggers *[]*string
```

- *Type:* *[]*string

<p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods.

Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#period_triggers Mediapackagev2OriginEndpoint#period_triggers}

---

##### `Profiles`<sup>Optional</sup> <a name="Profiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.profiles"></a>

```go
Profiles *[]*string
```

- *Type:* *[]*string

<p>The profile that the output is compliant with.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#profiles Mediapackagev2OriginEndpoint#profiles}

---

##### `ProgramInformation`<sup>Optional</sup> <a name="ProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.programInformation"></a>

```go
ProgramInformation Mediapackagev2OriginEndpointDashManifestsProgramInformation
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

<p>Details about the content that you want MediaPackage to pass through in the manifest to the playback device.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#program_information Mediapackagev2OriginEndpoint#program_information}

---

##### `ScteDash`<sup>Optional</sup> <a name="ScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.scteDash"></a>

```go
ScteDash Mediapackagev2OriginEndpointDashManifestsScteDash
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_dash Mediapackagev2OriginEndpoint#scte_dash}

---

##### `SegmentTemplateFormat`<sup>Optional</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.segmentTemplateFormat"></a>

```go
SegmentTemplateFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#segment_template_format Mediapackagev2OriginEndpoint#segment_template_format}.

---

##### `SubtitleConfiguration`<sup>Optional</sup> <a name="SubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.subtitleConfiguration"></a>

```go
SubtitleConfiguration Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

<p>The configuration for DASH subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#subtitle_configuration Mediapackagev2OriginEndpoint#subtitle_configuration}

---

##### `SuggestedPresentationDelaySeconds`<sup>Optional</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.suggestedPresentationDelaySeconds"></a>

```go
SuggestedPresentationDelaySeconds *f64
```

- *Type:* *f64

<p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#suggested_presentation_delay_seconds Mediapackagev2OriginEndpoint#suggested_presentation_delay_seconds}

---

##### `UriPathType`<sup>Optional</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.uriPathType"></a>

```go
UriPathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `UtcTiming`<sup>Optional</sup> <a name="UtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifests.property.utcTiming"></a>

```go
UtcTiming Mediapackagev2OriginEndpointDashManifestsUtcTiming
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

<p>Determines the type of UTC timing included in the DASH Media Presentation Description (MPD).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#utc_timing Mediapackagev2OriginEndpoint#utc_timing}

---

### Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration {
	FixedAvailabilityStartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.property.fixedAvailabilityStartTime">FixedAvailabilityStartTime</a></code> | <code>*string</code> | <p>The fixed availability start time for the DASH manifest, in ISO 8601 date-time format. |

---

##### `FixedAvailabilityStartTime`<sup>Optional</sup> <a name="FixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration.property.fixedAvailabilityStartTime"></a>

```go
FixedAvailabilityStartTime *string
```

- *Type:* *string

<p>The fixed availability start time for the DASH manifest, in ISO 8601 date-time format.

The value must have hourly granularity, meaning that the minutes, seconds, and fractional seconds must be zero. The value must be on or after <code>2024-01-01T00:00:00Z</code> and must be at least 14 days before the current time.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#fixed_availability_start_time Mediapackagev2OriginEndpoint#fixed_availability_start_time}

---

### Mediapackagev2OriginEndpointDashManifestsBaseUrls <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls {
	DvbPriority: *f64,
	DvbWeight: *f64,
	ServiceLocation: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbPriority">DvbPriority</a></code> | <code>*f64</code> | <p>For use with DVB-DASH profiles only. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbWeight">DvbWeight</a></code> | <code>*f64</code> | <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.serviceLocation">ServiceLocation</a></code> | <code>*string</code> | <p>The name of the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.url">Url</a></code> | <code>*string</code> | <p>A source location for segments.</p>. |

---

##### `DvbPriority`<sup>Optional</sup> <a name="DvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbPriority"></a>

```go
DvbPriority *f64
```

- *Type:* *f64

<p>For use with DVB-DASH profiles only.

The priority of this location for servings segments. The lower the number, the higher the priority.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#dvb_priority Mediapackagev2OriginEndpoint#dvb_priority}

---

##### `DvbWeight`<sup>Optional</sup> <a name="DvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.dvbWeight"></a>

```go
DvbWeight *f64
```

- *Type:* *f64

<p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#dvb_weight Mediapackagev2OriginEndpoint#dvb_weight}

---

##### `ServiceLocation`<sup>Optional</sup> <a name="ServiceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.serviceLocation"></a>

```go
ServiceLocation *string
```

- *Type:* *string

<p>The name of the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#service_location Mediapackagev2OriginEndpoint#service_location}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrls.property.url"></a>

```go
Url *string
```

- *Type:* *string

<p>A source location for segments.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettings <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings {
	ErrorMetrics: interface{},
	FontDownload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.errorMetrics">ErrorMetrics</a></code> | <code>interface{}</code> | <p>Playback device error reporting settings.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.fontDownload">FontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a></code> | <p>For use with DVB-DASH profiles only. |

---

##### `ErrorMetrics`<sup>Optional</sup> <a name="ErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.errorMetrics"></a>

```go
ErrorMetrics interface{}
```

- *Type:* interface{}

<p>Playback device error reporting settings.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#error_metrics Mediapackagev2OriginEndpoint#error_metrics}

---

##### `FontDownload`<sup>Optional</sup> <a name="FontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings.property.fontDownload"></a>

```go
FontDownload Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

<p>For use with DVB-DASH profiles only.

The settings for font downloads that you want Elemental MediaPackage to pass through to the manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#font_download Mediapackagev2OriginEndpoint#font_download}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics {
	Probability: *f64,
	ReportingUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.probability">Probability</a></code> | <code>*f64</code> | <p>The number of playback devices per 1000 that will send error reports to the reporting URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.reportingUrl">ReportingUrl</a></code> | <code>*string</code> | <p>The URL where playback devices send error reports.</p>. |

---

##### `Probability`<sup>Optional</sup> <a name="Probability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.probability"></a>

```go
Probability *f64
```

- *Type:* *f64

<p>The number of playback devices per 1000 that will send error reports to the reporting URL.

This represents the probability that a playback device will be a reporting player for this session.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#probability Mediapackagev2OriginEndpoint#probability}

---

##### `ReportingUrl`<sup>Optional</sup> <a name="ReportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetrics.property.reportingUrl"></a>

```go
ReportingUrl *string
```

- *Type:* *string

<p>The URL where playback devices send error reports.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#reporting_url Mediapackagev2OriginEndpoint#reporting_url}

---

### Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload {
	FontFamily: *string,
	MimeType: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.fontFamily">FontFamily</a></code> | <code>*string</code> | <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.mimeType">MimeType</a></code> | <code>*string</code> | <p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.url">Url</a></code> | <code>*string</code> | <p>The URL for downloading fonts for subtitles.</p>. |

---

##### `FontFamily`<sup>Optional</sup> <a name="FontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.fontFamily"></a>

```go
FontFamily *string
```

- *Type:* *string

<p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#font_family Mediapackagev2OriginEndpoint#font_family}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.mimeType"></a>

```go
MimeType *string
```

- *Type:* *string

<p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#mime_type Mediapackagev2OriginEndpoint#mime_type}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload.property.url"></a>

```go
Url *string
```

- *Type:* *string

<p>The URL for downloading fonts for subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointDashManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration {
	ClipStartTime: *string,
	DrmSettings: *string,
	End: *string,
	ManifestFilter: *string,
	Start: *string,
	TimeDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.end">End</a></code> | <code>*string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.start">Start</a></code> | <code>*string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `ClipStartTime`<sup>Optional</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.clipStartTime"></a>

```go
ClipStartTime *string
```

- *Type:* *string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `DrmSettings`<sup>Optional</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.drmSettings"></a>

```go
DrmSettings *string
```

- *Type:* *string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.end"></a>

```go
End *string
```

- *Type:* *string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `ManifestFilter`<sup>Optional</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.manifestFilter"></a>

```go
ManifestFilter *string
```

- *Type:* *string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.start"></a>

```go
Start *string
```

- *Type:* *string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `TimeDelaySeconds`<sup>Optional</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```go
TimeDelaySeconds *f64
```

- *Type:* *f64

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointDashManifestsProgramInformation <a name="Mediapackagev2OriginEndpointDashManifestsProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation {
	Copyright: *string,
	LanguageCode: *string,
	MoreInformationUrl: *string,
	Source: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.copyright">Copyright</a></code> | <code>*string</code> | <p>A copyright statement about the content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.languageCode">LanguageCode</a></code> | <code>*string</code> | <p>The language code for this manifest.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.moreInformationUrl">MoreInformationUrl</a></code> | <code>*string</code> | <p>An absolute URL that contains more information about this content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.source">Source</a></code> | <code>*string</code> | <p>Information about the content provider.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.title">Title</a></code> | <code>*string</code> | <p>The title for the manifest.</p>. |

---

##### `Copyright`<sup>Optional</sup> <a name="Copyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.copyright"></a>

```go
Copyright *string
```

- *Type:* *string

<p>A copyright statement about the content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#copyright Mediapackagev2OriginEndpoint#copyright}

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

<p>The language code for this manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#language_code Mediapackagev2OriginEndpoint#language_code}

---

##### `MoreInformationUrl`<sup>Optional</sup> <a name="MoreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.moreInformationUrl"></a>

```go
MoreInformationUrl *string
```

- *Type:* *string

<p>An absolute URL that contains more information about this content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#more_information_url Mediapackagev2OriginEndpoint#more_information_url}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.source"></a>

```go
Source *string
```

- *Type:* *string

<p>Information about the content provider.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#source Mediapackagev2OriginEndpoint#source}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation.property.title"></a>

```go
Title *string
```

- *Type:* *string

<p>The title for the manifest.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#title Mediapackagev2OriginEndpoint#title}

---

### Mediapackagev2OriginEndpointDashManifestsScteDash <a name="Mediapackagev2OriginEndpointDashManifestsScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsScteDash {
	AdMarkerDash: *string,
	ScteInManifests: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.adMarkerDash">AdMarkerDash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_dash Mediapackagev2OriginEndpoint#ad_marker_dash}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `AdMarkerDash`<sup>Optional</sup> <a name="AdMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.adMarkerDash"></a>

```go
AdMarkerDash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_dash Mediapackagev2OriginEndpoint#ad_marker_dash}.

---

##### `ScteInManifests`<sup>Optional</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash.property.scteInManifests"></a>

```go
ScteInManifests *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration {
	TtmlConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.property.ttmlConfiguration">TtmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a></code> | <p>The settings for TTML subtitles.</p>. |

---

##### `TtmlConfiguration`<sup>Optional</sup> <a name="TtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration.property.ttmlConfiguration"></a>

```go
TtmlConfiguration Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

<p>The settings for TTML subtitles.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ttml_configuration Mediapackagev2OriginEndpoint#ttml_configuration}

---

### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration {
	TtmlProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.property.ttmlProfile">TtmlProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ttml_profile Mediapackagev2OriginEndpoint#ttml_profile}. |

---

##### `TtmlProfile`<sup>Optional</sup> <a name="TtmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration.property.ttmlProfile"></a>

```go
TtmlProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ttml_profile Mediapackagev2OriginEndpoint#ttml_profile}.

---

### Mediapackagev2OriginEndpointDashManifestsUtcTiming <a name="Mediapackagev2OriginEndpointDashManifestsUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming {
	TimingMode: *string,
	TimingSource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingMode">TimingMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#timing_mode Mediapackagev2OriginEndpoint#timing_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingSource">TimingSource</a></code> | <code>*string</code> | <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>. |

---

##### `TimingMode`<sup>Optional</sup> <a name="TimingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingMode"></a>

```go
TimingMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#timing_mode Mediapackagev2OriginEndpoint#timing_mode}.

---

##### `TimingSource`<sup>Optional</sup> <a name="TimingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming.property.timingSource"></a>

```go
TimingSource *string
```

- *Type:* *string

<p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#timing_source Mediapackagev2OriginEndpoint#timing_source}

---

### Mediapackagev2OriginEndpointForceEndpointErrorConfiguration <a name="Mediapackagev2OriginEndpointForceEndpointErrorConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration {
	EndpointErrorConditions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.property.endpointErrorConditions">EndpointErrorConditions</a></code> | <code>*[]*string</code> | <p>The failover conditions for the endpoint. |

---

##### `EndpointErrorConditions`<sup>Optional</sup> <a name="EndpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfiguration.property.endpointErrorConditions"></a>

```go
EndpointErrorConditions *[]*string
```

- *Type:* *[]*string

<p>The failover conditions for the endpoint.

The options are:</p> <ul> <li> <p> <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p> </li> <li> <p> <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p> </li> </ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#endpoint_error_conditions Mediapackagev2OriginEndpoint#endpoint_error_conditions}

---

### Mediapackagev2OriginEndpointHlsManifests <a name="Mediapackagev2OriginEndpointHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointHlsManifests {
	ChildManifestName: *string,
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration,
	ManifestName: *string,
	ManifestWindowSeconds: *f64,
	ProgramDateTimeIntervalSeconds: *f64,
	ScteHls: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls,
	StartTag: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag,
	UriPathType: *string,
	Url: *string,
	UrlEncodeChildManifest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | <p>A short short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a></code> | <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.uriPathType">UriPathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.url">Url</a></code> | <code>*string</code> | <p>The egress domain URL for stream delivery from MediaPackage.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>interface{}</code> | <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. |

---

##### `ChildManifestName`<sup>Optional</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.childManifestName"></a>

```go
ChildManifestName *string
```

- *Type:* *string

<p>A short string that's appended to the endpoint URL.

The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name Mediapackagev2OriginEndpoint#child_manifest_name}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.filterConfiguration"></a>

```go
FilterConfiguration Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

<p>A short short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.programDateTimeIntervalSeconds"></a>

```go
ProgramDateTimeIntervalSeconds *f64
```

- *Type:* *f64

<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify.

If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds Mediapackagev2OriginEndpoint#program_date_time_interval_seconds}

---

##### `ScteHls`<sup>Optional</sup> <a name="ScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.scteHls"></a>

```go
ScteHls Mediapackagev2OriginEndpointHlsManifestsScteHls
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls Mediapackagev2OriginEndpoint#scte_hls}

---

##### `StartTag`<sup>Optional</sup> <a name="StartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.startTag"></a>

```go
StartTag Mediapackagev2OriginEndpointHlsManifestsStartTag
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset.

When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start_tag Mediapackagev2OriginEndpoint#start_tag}

---

##### `UriPathType`<sup>Optional</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.uriPathType"></a>

```go
UriPathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.url"></a>

```go
Url *string
```

- *Type:* *string

<p>The egress domain URL for stream delivery from MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

##### `UrlEncodeChildManifest`<sup>Optional</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifests.property.urlEncodeChildManifest"></a>

```go
UrlEncodeChildManifest interface{}
```

- *Type:* interface{}

<p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.

For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest Mediapackagev2OriginEndpoint#url_encode_child_manifest}

---

### Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration {
	ClipStartTime: *string,
	DrmSettings: *string,
	End: *string,
	ManifestFilter: *string,
	Start: *string,
	TimeDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.end">End</a></code> | <code>*string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.start">Start</a></code> | <code>*string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `ClipStartTime`<sup>Optional</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.clipStartTime"></a>

```go
ClipStartTime *string
```

- *Type:* *string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `DrmSettings`<sup>Optional</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.drmSettings"></a>

```go
DrmSettings *string
```

- *Type:* *string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.end"></a>

```go
End *string
```

- *Type:* *string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `ManifestFilter`<sup>Optional</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.manifestFilter"></a>

```go
ManifestFilter *string
```

- *Type:* *string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.start"></a>

```go
Start *string
```

- *Type:* *string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `TimeDelaySeconds`<sup>Optional</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```go
TimeDelaySeconds *f64
```

- *Type:* *f64

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointHlsManifestsScteHls <a name="Mediapackagev2OriginEndpointHlsManifestsScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls {
	AdMarkerHls: *string,
	ScteInManifests: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `AdMarkerHls`<sup>Optional</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.adMarkerHls"></a>

```go
AdMarkerHls *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}.

---

##### `ScteInManifests`<sup>Optional</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls.property.scteInManifests"></a>

```go
ScteInManifests *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointHlsManifestsStartTag <a name="Mediapackagev2OriginEndpointHlsManifestsStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag {
	Precise: interface{},
	TimeOffset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.precise">Precise</a></code> | <code>interface{}</code> | <p>Specify the value for PRECISE within your EXT-X-START tag. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. |

---

##### `Precise`<sup>Optional</sup> <a name="Precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.precise"></a>

```go
Precise interface{}
```

- *Type:* interface{}

<p>Specify the value for PRECISE within your EXT-X-START tag.

Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#precise Mediapackagev2OriginEndpoint#precise}

---

##### `TimeOffset`<sup>Optional</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag.property.timeOffset"></a>

```go
TimeOffset *f64
```

- *Type:* *f64

<p>Specify the value for TIME-OFFSET within your EXT-X-START tag.

Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_offset Mediapackagev2OriginEndpoint#time_offset}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifests <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests {
	ChildManifestName: *string,
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration,
	ManifestName: *string,
	ManifestWindowSeconds: *f64,
	ProgramDateTimeIntervalSeconds: *f64,
	ScteHls: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls,
	StartTag: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag,
	UriPathType: *string,
	Url: *string,
	UrlEncodeChildManifest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | <p>A short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | <p>A short short string that's appended to the endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The total duration (in seconds) of the manifest's content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a></code> | <p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.uriPathType">UriPathType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.url">Url</a></code> | <code>*string</code> | <p>The egress domain URL for stream delivery from MediaPackage.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>interface{}</code> | <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. |

---

##### `ChildManifestName`<sup>Optional</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.childManifestName"></a>

```go
ChildManifestName *string
```

- *Type:* *string

<p>A short string that's appended to the endpoint URL.

The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#child_manifest_name Mediapackagev2OriginEndpoint#child_manifest_name}

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.filterConfiguration"></a>

```go
FilterConfiguration Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

<p>A short short string that's appended to the endpoint URL.

The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The total duration (in seconds) of the manifest's content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.programDateTimeIntervalSeconds"></a>

```go
ProgramDateTimeIntervalSeconds *f64
```

- *Type:* *f64

<p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify.

If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#program_date_time_interval_seconds Mediapackagev2OriginEndpoint#program_date_time_interval_seconds}

---

##### `ScteHls`<sup>Optional</sup> <a name="ScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.scteHls"></a>

```go
ScteHls Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_hls Mediapackagev2OriginEndpoint#scte_hls}

---

##### `StartTag`<sup>Optional</sup> <a name="StartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.startTag"></a>

```go
StartTag Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

<p>To insert an EXT-X-START tag in your HLS playlist, specify a StartTag configuration object with a valid TimeOffset.

When you do, you can also optionally specify whether to include a PRECISE value in the EXT-X-START tag.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start_tag Mediapackagev2OriginEndpoint#start_tag}

---

##### `UriPathType`<sup>Optional</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.uriPathType"></a>

```go
UriPathType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#uri_path_type Mediapackagev2OriginEndpoint#uri_path_type}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.url"></a>

```go
Url *string
```

- *Type:* *string

<p>The egress domain URL for stream delivery from MediaPackage.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

##### `UrlEncodeChildManifest`<sup>Optional</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifests.property.urlEncodeChildManifest"></a>

```go
UrlEncodeChildManifest interface{}
```

- *Type:* interface{}

<p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol.

For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url_encode_child_manifest Mediapackagev2OriginEndpoint#url_encode_child_manifest}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration {
	ClipStartTime: *string,
	DrmSettings: *string,
	End: *string,
	ManifestFilter: *string,
	Start: *string,
	TimeDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.end">End</a></code> | <code>*string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.start">Start</a></code> | <code>*string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `ClipStartTime`<sup>Optional</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.clipStartTime"></a>

```go
ClipStartTime *string
```

- *Type:* *string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `DrmSettings`<sup>Optional</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.drmSettings"></a>

```go
DrmSettings *string
```

- *Type:* *string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.end"></a>

```go
End *string
```

- *Type:* *string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `ManifestFilter`<sup>Optional</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.manifestFilter"></a>

```go
ManifestFilter *string
```

- *Type:* *string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.start"></a>

```go
Start *string
```

- *Type:* *string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `TimeDelaySeconds`<sup>Optional</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```go
TimeDelaySeconds *f64
```

- *Type:* *f64

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls {
	AdMarkerHls: *string,
	ScteInManifests: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}. |

---

##### `AdMarkerHls`<sup>Optional</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.adMarkerHls"></a>

```go
AdMarkerHls *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ad_marker_hls Mediapackagev2OriginEndpoint#ad_marker_hls}.

---

##### `ScteInManifests`<sup>Optional</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls.property.scteInManifests"></a>

```go
ScteInManifests *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_manifests Mediapackagev2OriginEndpoint#scte_in_manifests}.

---

### Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag {
	Precise: interface{},
	TimeOffset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.precise">Precise</a></code> | <code>interface{}</code> | <p>Specify the value for PRECISE within your EXT-X-START tag. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. |

---

##### `Precise`<sup>Optional</sup> <a name="Precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.precise"></a>

```go
Precise interface{}
```

- *Type:* interface{}

<p>Specify the value for PRECISE within your EXT-X-START tag.

Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#precise Mediapackagev2OriginEndpoint#precise}

---

##### `TimeOffset`<sup>Optional</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag.property.timeOffset"></a>

```go
TimeOffset *f64
```

- *Type:* *f64

<p>Specify the value for TIME-OFFSET within your EXT-X-START tag.

Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_offset Mediapackagev2OriginEndpoint#time_offset}

---

### Mediapackagev2OriginEndpointMssManifests <a name="Mediapackagev2OriginEndpointMssManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointMssManifests {
	FilterConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration,
	ManifestLayout: *string,
	ManifestName: *string,
	ManifestWindowSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a></code> | <p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestLayout">ManifestLayout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_layout Mediapackagev2OriginEndpoint#manifest_layout}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestName">ManifestName</a></code> | <code>*string</code> | <p>The name of the MSS manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | <p>The duration (in seconds) of the manifest window. |

---

##### `FilterConfiguration`<sup>Optional</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.filterConfiguration"></a>

```go
FilterConfiguration Mediapackagev2OriginEndpointMssManifestsFilterConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

<p>Filter configuration includes settings for manifest filtering, start and end times, and time delay that apply to all of your egress requests for this manifest.

</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#filter_configuration Mediapackagev2OriginEndpoint#filter_configuration}

---

##### `ManifestLayout`<sup>Optional</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestLayout"></a>

```go
ManifestLayout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_layout Mediapackagev2OriginEndpoint#manifest_layout}.

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestName"></a>

```go
ManifestName *string
```

- *Type:* *string

<p>The name of the MSS manifest.

This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_name Mediapackagev2OriginEndpoint#manifest_name}

---

##### `ManifestWindowSeconds`<sup>Optional</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifests.property.manifestWindowSeconds"></a>

```go
ManifestWindowSeconds *f64
```

- *Type:* *f64

<p>The duration (in seconds) of the manifest window.

This represents the total amount of content available in the manifest at any given time.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_window_seconds Mediapackagev2OriginEndpoint#manifest_window_seconds}

---

### Mediapackagev2OriginEndpointMssManifestsFilterConfiguration <a name="Mediapackagev2OriginEndpointMssManifestsFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration {
	ClipStartTime: *string,
	DrmSettings: *string,
	End: *string,
	ManifestFilter: *string,
	Start: *string,
	TimeDelaySeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | <p>Optionally specify the clip start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | <p>Optionally specify one or more DRM settings for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.end">End</a></code> | <code>*string</code> | <p>Optionally specify the end time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | <p>Optionally specify one or more manifest filters for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.start">Start</a></code> | <code>*string</code> | <p>Optionally specify the start time for all of your manifest egress requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | <p>Optionally specify the time delay for all of your manifest egress requests. |

---

##### `ClipStartTime`<sup>Optional</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.clipStartTime"></a>

```go
ClipStartTime *string
```

- *Type:* *string

<p>Optionally specify the clip start time for all of your manifest egress requests.

When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#clip_start_time Mediapackagev2OriginEndpoint#clip_start_time}

---

##### `DrmSettings`<sup>Optional</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.drmSettings"></a>

```go
DrmSettings *string
```

- *Type:* *string

<p>Optionally specify one or more DRM settings for all of your manifest egress requests.

When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_settings Mediapackagev2OriginEndpoint#drm_settings}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.end"></a>

```go
End *string
```

- *Type:* *string

<p>Optionally specify the end time for all of your manifest egress requests.

When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#end Mediapackagev2OriginEndpoint#end}

---

##### `ManifestFilter`<sup>Optional</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.manifestFilter"></a>

```go
ManifestFilter *string
```

- *Type:* *string

<p>Optionally specify one or more manifest filters for all of your manifest egress requests.

When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#manifest_filter Mediapackagev2OriginEndpoint#manifest_filter}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.start"></a>

```go
Start *string
```

- *Type:* *string

<p>Optionally specify the start time for all of your manifest egress requests.

When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#start Mediapackagev2OriginEndpoint#start}

---

##### `TimeDelaySeconds`<sup>Optional</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration.property.timeDelaySeconds"></a>

```go
TimeDelaySeconds *f64
```

- *Type:* *f64

<p>Optionally specify the time delay for all of your manifest egress requests.

Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#time_delay_seconds Mediapackagev2OriginEndpoint#time_delay_seconds}

---

### Mediapackagev2OriginEndpointSegment <a name="Mediapackagev2OriginEndpointSegment" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegment {
	Encryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption,
	IncludeIframeOnlyStreams: interface{},
	OutputTimestampMode: *string,
	Scte: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte,
	SegmentDurationSeconds: *f64,
	SegmentName: *string,
	TsIncludeDvbSubtitles: interface{},
	TsUseAudioRenditionGroup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a></code> | <p>The parameters for encrypting content.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.includeIframeOnlyStreams">IncludeIframeOnlyStreams</a></code> | <code>interface{}</code> | <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.outputTimestampMode">OutputTimestampMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#output_timestamp_mode Mediapackagev2OriginEndpoint#output_timestamp_mode}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.scte">Scte</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a></code> | <p>The SCTE configuration.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | <p>The duration (in seconds) of each segment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentName">SegmentName</a></code> | <code>*string</code> | <p>The name that describes the segment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsIncludeDvbSubtitles">TsIncludeDvbSubtitles</a></code> | <code>interface{}</code> | <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsUseAudioRenditionGroup">TsUseAudioRenditionGroup</a></code> | <code>interface{}</code> | <p>When selected, MediaPackage bundles all audio tracks in a rendition group. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.encryption"></a>

```go
Encryption Mediapackagev2OriginEndpointSegmentEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

<p>The parameters for encrypting content.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#encryption Mediapackagev2OriginEndpoint#encryption}

---

##### `IncludeIframeOnlyStreams`<sup>Optional</sup> <a name="IncludeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.includeIframeOnlyStreams"></a>

```go
IncludeIframeOnlyStreams interface{}
```

- *Type:* interface{}

<p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks.

If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#include_iframe_only_streams Mediapackagev2OriginEndpoint#include_iframe_only_streams}

---

##### `OutputTimestampMode`<sup>Optional</sup> <a name="OutputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.outputTimestampMode"></a>

```go
OutputTimestampMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#output_timestamp_mode Mediapackagev2OriginEndpoint#output_timestamp_mode}.

---

##### `Scte`<sup>Optional</sup> <a name="Scte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.scte"></a>

```go
Scte Mediapackagev2OriginEndpointSegmentScte
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

<p>The SCTE configuration.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte Mediapackagev2OriginEndpoint#scte}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentDurationSeconds"></a>

```go
SegmentDurationSeconds *f64
```

- *Type:* *f64

<p>The duration (in seconds) of each segment.

Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#segment_duration_seconds Mediapackagev2OriginEndpoint#segment_duration_seconds}

---

##### `SegmentName`<sup>Optional</sup> <a name="SegmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.segmentName"></a>

```go
SegmentName *string
```

- *Type:* *string

<p>The name that describes the segment.

The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#segment_name Mediapackagev2OriginEndpoint#segment_name}

---

##### `TsIncludeDvbSubtitles`<sup>Optional</sup> <a name="TsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsIncludeDvbSubtitles"></a>

```go
TsIncludeDvbSubtitles interface{}
```

- *Type:* interface{}

<p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output.

When selected, MediaPackage passes through DVB subtitles into the output.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ts_include_dvb_subtitles Mediapackagev2OriginEndpoint#ts_include_dvb_subtitles}

---

##### `TsUseAudioRenditionGroup`<sup>Optional</sup> <a name="TsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegment.property.tsUseAudioRenditionGroup"></a>

```go
TsUseAudioRenditionGroup interface{}
```

- *Type:* interface{}

<p>When selected, MediaPackage bundles all audio tracks in a rendition group.

All other tracks in the stream can be used with any audio rendition from the group.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ts_use_audio_rendition_group Mediapackagev2OriginEndpoint#ts_use_audio_rendition_group}

---

### Mediapackagev2OriginEndpointSegmentEncryption <a name="Mediapackagev2OriginEndpointSegmentEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegmentEncryption {
	CmafExcludeSegmentDrmMetadata: interface{},
	ConstantInitializationVector: *string,
	EncryptionMethod: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod,
	KeyRotationIntervalSeconds: *f64,
	SpekeKeyProvider: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.cmafExcludeSegmentDrmMetadata">CmafExcludeSegmentDrmMetadata</a></code> | <code>interface{}</code> | <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> \| <code>false</code> </p> <p>Default: <code>false</code> </p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.encryptionMethod">EncryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a></code> | <p>The encryption type.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.keyRotationIntervalSeconds">KeyRotationIntervalSeconds</a></code> | <code>*f64</code> | <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a></code> | <p>The parameters for the SPEKE key provider.</p>. |

---

##### `CmafExcludeSegmentDrmMetadata`<sup>Optional</sup> <a name="CmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.cmafExcludeSegmentDrmMetadata"></a>

```go
CmafExcludeSegmentDrmMetadata interface{}
```

- *Type:* interface{}

<p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_exclude_segment_drm_metadata Mediapackagev2OriginEndpoint#cmaf_exclude_segment_drm_metadata}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.constantInitializationVector"></a>

```go
ConstantInitializationVector *string
```

- *Type:* *string

<p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content.

If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#constant_initialization_vector Mediapackagev2OriginEndpoint#constant_initialization_vector}

---

##### `EncryptionMethod`<sup>Optional</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.encryptionMethod"></a>

```go
EncryptionMethod Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

<p>The encryption type.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#encryption_method Mediapackagev2OriginEndpoint#encryption_method}

---

##### `KeyRotationIntervalSeconds`<sup>Optional</sup> <a name="KeyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.keyRotationIntervalSeconds"></a>

```go
KeyRotationIntervalSeconds *f64
```

- *Type:* *f64

<p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time.

The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#key_rotation_interval_seconds Mediapackagev2OriginEndpoint#key_rotation_interval_seconds}

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption.property.spekeKeyProvider"></a>

```go
SpekeKeyProvider Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

<p>The parameters for the SPEKE key provider.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#speke_key_provider Mediapackagev2OriginEndpoint#speke_key_provider}

---

### Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod <a name="Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod {
	CmafEncryptionMethod: *string,
	IsmEncryptionMethod: *string,
	TsEncryptionMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.cmafEncryptionMethod">CmafEncryptionMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_encryption_method Mediapackagev2OriginEndpoint#cmaf_encryption_method}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.ismEncryptionMethod">IsmEncryptionMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ism_encryption_method Mediapackagev2OriginEndpoint#ism_encryption_method}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.tsEncryptionMethod">TsEncryptionMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ts_encryption_method Mediapackagev2OriginEndpoint#ts_encryption_method}. |

---

##### `CmafEncryptionMethod`<sup>Optional</sup> <a name="CmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.cmafEncryptionMethod"></a>

```go
CmafEncryptionMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#cmaf_encryption_method Mediapackagev2OriginEndpoint#cmaf_encryption_method}.

---

##### `IsmEncryptionMethod`<sup>Optional</sup> <a name="IsmEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.ismEncryptionMethod"></a>

```go
IsmEncryptionMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ism_encryption_method Mediapackagev2OriginEndpoint#ism_encryption_method}.

---

##### `TsEncryptionMethod`<sup>Optional</sup> <a name="TsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod.property.tsEncryptionMethod"></a>

```go
TsEncryptionMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#ts_encryption_method Mediapackagev2OriginEndpoint#ts_encryption_method}.

---

### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider {
	CertificateArn: *string,
	DrmSystems: *[]*string,
	EncryptionContractConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration,
	ResourceId: *string,
	RoleArn: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | <p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.drmSystems">DrmSystems</a></code> | <code>*[]*string</code> | <p>The DRM solution provider you're using to protect your content during distribution.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | <p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.resourceId">ResourceId</a></code> | <code>*string</code> | <p>The unique identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>*string</code> | <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>*string</code> | <p>The URL of the API Gateway proxy that you set up to talk to your key server. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

<p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint.

For this feature to work, your DRM key provider must support content key encryption.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#certificate_arn Mediapackagev2OriginEndpoint#certificate_arn}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.drmSystems"></a>

```go
DrmSystems *[]*string
```

- *Type:* *[]*string

<p>The DRM solution provider you're using to protect your content during distribution.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#drm_systems Mediapackagev2OriginEndpoint#drm_systems}

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```go
EncryptionContractConfiguration Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

<p>Configure one or more content encryption keys for your endpoints that use SPEKE Version 2.0. The encryption contract defines which content keys are used to encrypt the audio and video tracks in your stream. To configure the encryption contract, specify which audio and video encryption presets to use.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#encryption_contract_configuration Mediapackagev2OriginEndpoint#encryption_contract_configuration}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

<p>The unique identifier for the content.

The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: <code>MovieNight20171126093045</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#resource_id Mediapackagev2OriginEndpoint#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

<p>The ARN for the IAM role granted by the key provider that provides access to the key provider API.

This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#role_arn Mediapackagev2OriginEndpoint#role_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider.property.url"></a>

```go
Url *string
```

- *Type:* *string

<p>The URL of the API Gateway proxy that you set up to talk to your key server.

The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code> </p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#url Mediapackagev2OriginEndpoint#url}

---

### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration {
	PresetSpeke20Audio: *string,
	PresetSpeke20Video: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_audio Mediapackagev2OriginEndpoint#preset_speke_20_audio}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_video Mediapackagev2OriginEndpoint#preset_speke_20_video}. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```go
PresetSpeke20Audio *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_audio Mediapackagev2OriginEndpoint#preset_speke_20_audio}.

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```go
PresetSpeke20Video *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#preset_speke_20_video Mediapackagev2OriginEndpoint#preset_speke_20_video}.

---

### Mediapackagev2OriginEndpointSegmentScte <a name="Mediapackagev2OriginEndpointSegmentScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointSegmentScte {
	CustomAdTypes: *[]*string,
	ScteFilter: *[]*string,
	ScteInSegments: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.customAdTypes">CustomAdTypes</a></code> | <code>*[]*string</code> | <p>A list of additional non-Ad SCTE-35 event types to treat as advertisements. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteFilter">ScteFilter</a></code> | <code>*[]*string</code> | <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteInSegments">ScteInSegments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_segments Mediapackagev2OriginEndpoint#scte_in_segments}. |

---

##### `CustomAdTypes`<sup>Optional</sup> <a name="CustomAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.customAdTypes"></a>

```go
CustomAdTypes *[]*string
```

- *Type:* *[]*string

<p>A list of additional non-Ad SCTE-35 event types to treat as advertisements.

When configured, events matching these types produce ad markers (such as <code>SCTE35-OUT</code> and <code>SCTE35-IN</code> in HLS DATERANGE tags) in manifests.</p> <p>Valid values: <code>PROGRAM</code> | <code>CHAPTER</code> | <code>UNSCHEDULED_EVENT</code> | <code>ALTERNATE_CONTENT_OPPORTUNITY</code> | <code>NETWORK</code> </p> <p>If you don't specify any values, the default is empty (only default ad types are used).</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#custom_ad_types Mediapackagev2OriginEndpoint#custom_ad_types}

---

##### `ScteFilter`<sup>Optional</sup> <a name="ScteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteFilter"></a>

```go
ScteFilter *[]*string
```

- *Type:* *[]*string

<p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_filter Mediapackagev2OriginEndpoint#scte_filter}

---

##### `ScteInSegments`<sup>Optional</sup> <a name="ScteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte.property.scteInSegments"></a>

```go
ScteInSegments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#scte_in_segments Mediapackagev2OriginEndpoint#scte_in_segments}.

---

### Mediapackagev2OriginEndpointTags <a name="Mediapackagev2OriginEndpointTags" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

&mediapackagev2originendpoint.Mediapackagev2OriginEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#key Mediapackagev2OriginEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#value Mediapackagev2OriginEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#key Mediapackagev2OriginEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediapackagev2_origin_endpoint#value Mediapackagev2OriginEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resetFixedAvailabilityStartTime">ResetFixedAvailabilityStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedAvailabilityStartTime` <a name="ResetFixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.resetFixedAvailabilityStartTime"></a>

```go
func ResetFixedAvailabilityStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTimeInput">FixedAvailabilityStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime">FixedAvailabilityStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedAvailabilityStartTimeInput`<sup>Optional</sup> <a name="FixedAvailabilityStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTimeInput"></a>

```go
func FixedAvailabilityStartTimeInput() *string
```

- *Type:* *string

---

##### `FixedAvailabilityStartTime`<sup>Required</sup> <a name="FixedAvailabilityStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.fixedAvailabilityStartTime"></a>

```go
func FixedAvailabilityStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsBaseUrlsList <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrlsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsBaseUrlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointDashManifestsBaseUrlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbPriority">ResetDvbPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbWeight">ResetDvbWeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetServiceLocation">ResetServiceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDvbPriority` <a name="ResetDvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbPriority"></a>

```go
func ResetDvbPriority()
```

##### `ResetDvbWeight` <a name="ResetDvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetDvbWeight"></a>

```go
func ResetDvbWeight()
```

##### `ResetServiceLocation` <a name="ResetServiceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetServiceLocation"></a>

```go
func ResetServiceLocation()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriorityInput">DvbPriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeightInput">DvbWeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocationInput">ServiceLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority">DvbPriority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight">DvbWeight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation">ServiceLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DvbPriorityInput`<sup>Optional</sup> <a name="DvbPriorityInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriorityInput"></a>

```go
func DvbPriorityInput() *f64
```

- *Type:* *f64

---

##### `DvbWeightInput`<sup>Optional</sup> <a name="DvbWeightInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeightInput"></a>

```go
func DvbWeightInput() *f64
```

- *Type:* *f64

---

##### `ServiceLocationInput`<sup>Optional</sup> <a name="ServiceLocationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocationInput"></a>

```go
func ServiceLocationInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `DvbPriority`<sup>Required</sup> <a name="DvbPriority" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbPriority"></a>

```go
func DvbPriority() *f64
```

- *Type:* *f64

---

##### `DvbWeight`<sup>Required</sup> <a name="DvbWeight" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.dvbWeight"></a>

```go
func DvbWeight() *f64
```

- *Type:* *f64

---

##### `ServiceLocation`<sup>Required</sup> <a name="ServiceLocation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.serviceLocation"></a>

```go
func ServiceLocation() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetProbability">ResetProbability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetReportingUrl">ResetReportingUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProbability` <a name="ResetProbability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetProbability"></a>

```go
func ResetProbability()
```

##### `ResetReportingUrl` <a name="ResetReportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.resetReportingUrl"></a>

```go
func ResetReportingUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probabilityInput">ProbabilityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrlInput">ReportingUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability">Probability</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl">ReportingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProbabilityInput`<sup>Optional</sup> <a name="ProbabilityInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probabilityInput"></a>

```go
func ProbabilityInput() *f64
```

- *Type:* *f64

---

##### `ReportingUrlInput`<sup>Optional</sup> <a name="ReportingUrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrlInput"></a>

```go
func ReportingUrlInput() *string
```

- *Type:* *string

---

##### `Probability`<sup>Required</sup> <a name="Probability" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.probability"></a>

```go
func Probability() *f64
```

- *Type:* *f64

---

##### `ReportingUrl`<sup>Required</sup> <a name="ReportingUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.reportingUrl"></a>

```go
func ReportingUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetFontFamily">ResetFontFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFontFamily` <a name="ResetFontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetFontFamily"></a>

```go
func ResetFontFamily()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetMimeType"></a>

```go
func ResetMimeType()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamilyInput">FontFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily">FontFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FontFamilyInput`<sup>Optional</sup> <a name="FontFamilyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamilyInput"></a>

```go
func FontFamilyInput() *string
```

- *Type:* *string

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeTypeInput"></a>

```go
func MimeTypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `FontFamily`<sup>Required</sup> <a name="FontFamily" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.fontFamily"></a>

```go
func FontFamily() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics">PutErrorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload">PutFontDownload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetErrorMetrics">ResetErrorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetFontDownload">ResetFontDownload</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutErrorMetrics` <a name="PutErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics"></a>

```go
func PutErrorMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putErrorMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFontDownload` <a name="PutFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload"></a>

```go
func PutFontDownload(value Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.putFontDownload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownload</a>

---

##### `ResetErrorMetrics` <a name="ResetErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetErrorMetrics"></a>

```go
func ResetErrorMetrics()
```

##### `ResetFontDownload` <a name="ResetFontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.resetFontDownload"></a>

```go
func ResetFontDownload()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics">ErrorMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload">FontDownload</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetricsInput">ErrorMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownloadInput">FontDownloadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorMetrics`<sup>Required</sup> <a name="ErrorMetrics" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetrics"></a>

```go
func ErrorMetrics() Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList">Mediapackagev2OriginEndpointDashManifestsDvbSettingsErrorMetricsList</a>

---

##### `FontDownload`<sup>Required</sup> <a name="FontDownload" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownload"></a>

```go
func FontDownload() Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsFontDownloadOutputReference</a>

---

##### `ErrorMetricsInput`<sup>Optional</sup> <a name="ErrorMetricsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.errorMetricsInput"></a>

```go
func ErrorMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `FontDownloadInput`<sup>Optional</sup> <a name="FontDownloadInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.fontDownloadInput"></a>

```go
func FontDownloadInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetClipStartTime">ResetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetDrmSettings">ResetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetManifestFilter">ResetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">ResetTimeDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClipStartTime` <a name="ResetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```go
func ResetClipStartTime()
```

##### `ResetDrmSettings` <a name="ResetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```go
func ResetDrmSettings()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetManifestFilter` <a name="ResetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```go
func ResetManifestFilter()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetStart"></a>

```go
func ResetStart()
```

##### `ResetTimeDelaySeconds` <a name="ResetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```go
func ResetTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">ClipStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettingsInput">DrmSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilterInput">ManifestFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">TimeDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTimeInput`<sup>Optional</sup> <a name="ClipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```go
func ClipStartTimeInput() *string
```

- *Type:* *string

---

##### `DrmSettingsInput`<sup>Optional</sup> <a name="DrmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```go
func DrmSettingsInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `ManifestFilterInput`<sup>Optional</sup> <a name="ManifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```go
func ManifestFilterInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeDelaySecondsInput`<sup>Optional</sup> <a name="TimeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```go
func TimeDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsList <a name="Mediapackagev2OriginEndpointDashManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointDashManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointDashManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointDashManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration">PutAvailabilityStartTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls">PutBaseUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings">PutDvbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation">PutProgramInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash">PutScteDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration">PutSubtitleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming">PutUtcTiming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAudioTimelinePattern">ResetAudioTimelinePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAvailabilityStartTimeConfiguration">ResetAvailabilityStartTimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetBaseUrls">ResetBaseUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetCompactness">ResetCompactness</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDrmSignaling">ResetDrmSignaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDvbSettings">ResetDvbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinBufferTimeSeconds">ResetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinUpdatePeriodSeconds">ResetMinUpdatePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetPeriodTriggers">ResetPeriodTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProfiles">ResetProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProgramInformation">ResetProgramInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetScteDash">ResetScteDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSegmentTemplateFormat">ResetSegmentTemplateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSubtitleConfiguration">ResetSubtitleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSuggestedPresentationDelaySeconds">ResetSuggestedPresentationDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUriPathType">ResetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUtcTiming">ResetUtcTiming</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityStartTimeConfiguration` <a name="PutAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration"></a>

```go
func PutAvailabilityStartTimeConfiguration(value Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putAvailabilityStartTimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfiguration</a>

---

##### `PutBaseUrls` <a name="PutBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls"></a>

```go
func PutBaseUrls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putBaseUrls.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDvbSettings` <a name="PutDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings"></a>

```go
func PutDvbSettings(value Mediapackagev2OriginEndpointDashManifestsDvbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putDvbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettings">Mediapackagev2OriginEndpointDashManifestsDvbSettings</a>

---

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value Mediapackagev2OriginEndpointDashManifestsFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfiguration">Mediapackagev2OriginEndpointDashManifestsFilterConfiguration</a>

---

##### `PutProgramInformation` <a name="PutProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation"></a>

```go
func PutProgramInformation(value Mediapackagev2OriginEndpointDashManifestsProgramInformation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putProgramInformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformation">Mediapackagev2OriginEndpointDashManifestsProgramInformation</a>

---

##### `PutScteDash` <a name="PutScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash"></a>

```go
func PutScteDash(value Mediapackagev2OriginEndpointDashManifestsScteDash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putScteDash.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDash">Mediapackagev2OriginEndpointDashManifestsScteDash</a>

---

##### `PutSubtitleConfiguration` <a name="PutSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration"></a>

```go
func PutSubtitleConfiguration(value Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putSubtitleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfiguration</a>

---

##### `PutUtcTiming` <a name="PutUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming"></a>

```go
func PutUtcTiming(value Mediapackagev2OriginEndpointDashManifestsUtcTiming)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.putUtcTiming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTiming">Mediapackagev2OriginEndpointDashManifestsUtcTiming</a>

---

##### `ResetAudioTimelinePattern` <a name="ResetAudioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAudioTimelinePattern"></a>

```go
func ResetAudioTimelinePattern()
```

##### `ResetAvailabilityStartTimeConfiguration` <a name="ResetAvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetAvailabilityStartTimeConfiguration"></a>

```go
func ResetAvailabilityStartTimeConfiguration()
```

##### `ResetBaseUrls` <a name="ResetBaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetBaseUrls"></a>

```go
func ResetBaseUrls()
```

##### `ResetCompactness` <a name="ResetCompactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetCompactness"></a>

```go
func ResetCompactness()
```

##### `ResetDrmSignaling` <a name="ResetDrmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDrmSignaling"></a>

```go
func ResetDrmSignaling()
```

##### `ResetDvbSettings` <a name="ResetDvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetDvbSettings"></a>

```go
func ResetDvbSettings()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```

##### `ResetMinBufferTimeSeconds` <a name="ResetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinBufferTimeSeconds"></a>

```go
func ResetMinBufferTimeSeconds()
```

##### `ResetMinUpdatePeriodSeconds` <a name="ResetMinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetMinUpdatePeriodSeconds"></a>

```go
func ResetMinUpdatePeriodSeconds()
```

##### `ResetPeriodTriggers` <a name="ResetPeriodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetPeriodTriggers"></a>

```go
func ResetPeriodTriggers()
```

##### `ResetProfiles` <a name="ResetProfiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProfiles"></a>

```go
func ResetProfiles()
```

##### `ResetProgramInformation` <a name="ResetProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetProgramInformation"></a>

```go
func ResetProgramInformation()
```

##### `ResetScteDash` <a name="ResetScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetScteDash"></a>

```go
func ResetScteDash()
```

##### `ResetSegmentTemplateFormat` <a name="ResetSegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSegmentTemplateFormat"></a>

```go
func ResetSegmentTemplateFormat()
```

##### `ResetSubtitleConfiguration` <a name="ResetSubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSubtitleConfiguration"></a>

```go
func ResetSubtitleConfiguration()
```

##### `ResetSuggestedPresentationDelaySeconds` <a name="ResetSuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetSuggestedPresentationDelaySeconds"></a>

```go
func ResetSuggestedPresentationDelaySeconds()
```

##### `ResetUriPathType` <a name="ResetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUriPathType"></a>

```go
func ResetUriPathType()
```

##### `ResetUtcTiming` <a name="ResetUtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.resetUtcTiming"></a>

```go
func ResetUtcTiming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration">AvailabilityStartTimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls">BaseUrls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList">Mediapackagev2OriginEndpointDashManifestsBaseUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings">DvbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation">ProgramInformation</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash">ScteDash</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference">Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration">SubtitleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming">UtcTiming</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePatternInput">AudioTimelinePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfigurationInput">AvailabilityStartTimeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrlsInput">BaseUrlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactnessInput">CompactnessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignalingInput">DrmSignalingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettingsInput">DvbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSecondsInput">MinBufferTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSecondsInput">MinUpdatePeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggersInput">PeriodTriggersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profilesInput">ProfilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformationInput">ProgramInformationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDashInput">ScteDashInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormatInput">SegmentTemplateFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfigurationInput">SubtitleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySecondsInput">SuggestedPresentationDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathTypeInput">UriPathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTimingInput">UtcTimingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern">AudioTimelinePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness">Compactness</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling">DrmSignaling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds">MinUpdatePeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles">Profiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds">SuggestedPresentationDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStartTimeConfiguration`<sup>Required</sup> <a name="AvailabilityStartTimeConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfiguration"></a>

```go
func AvailabilityStartTimeConfiguration() Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsAvailabilityStartTimeConfigurationOutputReference</a>

---

##### `BaseUrls`<sup>Required</sup> <a name="BaseUrls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrls"></a>

```go
func BaseUrls() Mediapackagev2OriginEndpointDashManifestsBaseUrlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsBaseUrlsList">Mediapackagev2OriginEndpointDashManifestsBaseUrlsList</a>

---

##### `DvbSettings`<sup>Required</sup> <a name="DvbSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettings"></a>

```go
func DvbSettings() Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference">Mediapackagev2OriginEndpointDashManifestsDvbSettingsOutputReference</a>

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsFilterConfigurationOutputReference</a>

---

##### `ProgramInformation`<sup>Required</sup> <a name="ProgramInformation" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformation"></a>

```go
func ProgramInformation() Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference">Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference</a>

---

##### `ScteDash`<sup>Required</sup> <a name="ScteDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDash"></a>

```go
func ScteDash() Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference">Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference</a>

---

##### `SubtitleConfiguration`<sup>Required</sup> <a name="SubtitleConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfiguration"></a>

```go
func SubtitleConfiguration() Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference</a>

---

##### `UtcTiming`<sup>Required</sup> <a name="UtcTiming" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTiming"></a>

```go
func UtcTiming() Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference">Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference</a>

---

##### `AudioTimelinePatternInput`<sup>Optional</sup> <a name="AudioTimelinePatternInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePatternInput"></a>

```go
func AudioTimelinePatternInput() *string
```

- *Type:* *string

---

##### `AvailabilityStartTimeConfigurationInput`<sup>Optional</sup> <a name="AvailabilityStartTimeConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.availabilityStartTimeConfigurationInput"></a>

```go
func AvailabilityStartTimeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `BaseUrlsInput`<sup>Optional</sup> <a name="BaseUrlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.baseUrlsInput"></a>

```go
func BaseUrlsInput() interface{}
```

- *Type:* interface{}

---

##### `CompactnessInput`<sup>Optional</sup> <a name="CompactnessInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactnessInput"></a>

```go
func CompactnessInput() *string
```

- *Type:* *string

---

##### `DrmSignalingInput`<sup>Optional</sup> <a name="DrmSignalingInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignalingInput"></a>

```go
func DrmSignalingInput() *string
```

- *Type:* *string

---

##### `DvbSettingsInput`<sup>Optional</sup> <a name="DvbSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.dvbSettingsInput"></a>

```go
func DvbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `MinBufferTimeSecondsInput`<sup>Optional</sup> <a name="MinBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSecondsInput"></a>

```go
func MinBufferTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `MinUpdatePeriodSecondsInput`<sup>Optional</sup> <a name="MinUpdatePeriodSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSecondsInput"></a>

```go
func MinUpdatePeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodTriggersInput`<sup>Optional</sup> <a name="PeriodTriggersInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggersInput"></a>

```go
func PeriodTriggersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProfilesInput`<sup>Optional</sup> <a name="ProfilesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profilesInput"></a>

```go
func ProfilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProgramInformationInput`<sup>Optional</sup> <a name="ProgramInformationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.programInformationInput"></a>

```go
func ProgramInformationInput() interface{}
```

- *Type:* interface{}

---

##### `ScteDashInput`<sup>Optional</sup> <a name="ScteDashInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.scteDashInput"></a>

```go
func ScteDashInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentTemplateFormatInput`<sup>Optional</sup> <a name="SegmentTemplateFormatInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormatInput"></a>

```go
func SegmentTemplateFormatInput() *string
```

- *Type:* *string

---

##### `SubtitleConfigurationInput`<sup>Optional</sup> <a name="SubtitleConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.subtitleConfigurationInput"></a>

```go
func SubtitleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SuggestedPresentationDelaySecondsInput`<sup>Optional</sup> <a name="SuggestedPresentationDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySecondsInput"></a>

```go
func SuggestedPresentationDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `UriPathTypeInput`<sup>Optional</sup> <a name="UriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathTypeInput"></a>

```go
func UriPathTypeInput() *string
```

- *Type:* *string

---

##### `UtcTimingInput`<sup>Optional</sup> <a name="UtcTimingInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.utcTimingInput"></a>

```go
func UtcTimingInput() interface{}
```

- *Type:* interface{}

---

##### `AudioTimelinePattern`<sup>Required</sup> <a name="AudioTimelinePattern" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.audioTimelinePattern"></a>

```go
func AudioTimelinePattern() *string
```

- *Type:* *string

---

##### `Compactness`<sup>Required</sup> <a name="Compactness" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.compactness"></a>

```go
func Compactness() *string
```

- *Type:* *string

---

##### `DrmSignaling`<sup>Required</sup> <a name="DrmSignaling" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.drmSignaling"></a>

```go
func DrmSignaling() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```go
func MinBufferTimeSeconds() *f64
```

- *Type:* *f64

---

##### `MinUpdatePeriodSeconds`<sup>Required</sup> <a name="MinUpdatePeriodSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.minUpdatePeriodSeconds"></a>

```go
func MinUpdatePeriodSeconds() *f64
```

- *Type:* *f64

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.periodTriggers"></a>

```go
func PeriodTriggers() *[]*string
```

- *Type:* *[]*string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.profiles"></a>

```go
func Profiles() *[]*string
```

- *Type:* *[]*string

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.segmentTemplateFormat"></a>

```go
func SegmentTemplateFormat() *string
```

- *Type:* *string

---

##### `SuggestedPresentationDelaySeconds`<sup>Required</sup> <a name="SuggestedPresentationDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.suggestedPresentationDelaySeconds"></a>

```go
func SuggestedPresentationDelaySeconds() *f64
```

- *Type:* *f64

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetCopyright">ResetCopyright</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetMoreInformationUrl">ResetMoreInformationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCopyright` <a name="ResetCopyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetCopyright"></a>

```go
func ResetCopyright()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetLanguageCode"></a>

```go
func ResetLanguageCode()
```

##### `ResetMoreInformationUrl` <a name="ResetMoreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetMoreInformationUrl"></a>

```go
func ResetMoreInformationUrl()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyrightInput">CopyrightInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrlInput">MoreInformationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright">Copyright</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl">MoreInformationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyrightInput`<sup>Optional</sup> <a name="CopyrightInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyrightInput"></a>

```go
func CopyrightInput() *string
```

- *Type:* *string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `MoreInformationUrlInput`<sup>Optional</sup> <a name="MoreInformationUrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrlInput"></a>

```go
func MoreInformationUrlInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Copyright`<sup>Required</sup> <a name="Copyright" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.copyright"></a>

```go
func Copyright() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `MoreInformationUrl`<sup>Required</sup> <a name="MoreInformationUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.moreInformationUrl"></a>

```go
func MoreInformationUrl() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsProgramInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsScteDashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetAdMarkerDash">ResetAdMarkerDash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetScteInManifests">ResetScteInManifests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdMarkerDash` <a name="ResetAdMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetAdMarkerDash"></a>

```go
func ResetAdMarkerDash()
```

##### `ResetScteInManifests` <a name="ResetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.resetScteInManifests"></a>

```go
func ResetScteInManifests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDashInput">AdMarkerDashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifestsInput">ScteInManifestsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash">AdMarkerDash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerDashInput`<sup>Optional</sup> <a name="AdMarkerDashInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDashInput"></a>

```go
func AdMarkerDashInput() *string
```

- *Type:* *string

---

##### `ScteInManifestsInput`<sup>Optional</sup> <a name="ScteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifestsInput"></a>

```go
func ScteInManifestsInput() *string
```

- *Type:* *string

---

##### `AdMarkerDash`<sup>Required</sup> <a name="AdMarkerDash" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.adMarkerDash"></a>

```go
func AdMarkerDash() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsScteDashOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration">PutTtmlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resetTtmlConfiguration">ResetTtmlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTtmlConfiguration` <a name="PutTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration"></a>

```go
func PutTtmlConfiguration(value Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.putTtmlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfiguration</a>

---

##### `ResetTtmlConfiguration` <a name="ResetTtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.resetTtmlConfiguration"></a>

```go
func ResetTtmlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration">TtmlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfigurationInput">TtmlConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtmlConfiguration`<sup>Required</sup> <a name="TtmlConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfiguration"></a>

```go
func TtmlConfiguration() Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference">Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference</a>

---

##### `TtmlConfigurationInput`<sup>Optional</sup> <a name="TtmlConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.ttmlConfigurationInput"></a>

```go
func TtmlConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resetTtmlProfile">ResetTtmlProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTtmlProfile` <a name="ResetTtmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.resetTtmlProfile"></a>

```go
func ResetTtmlProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfileInput">TtmlProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile">TtmlProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TtmlProfileInput`<sup>Optional</sup> <a name="TtmlProfileInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfileInput"></a>

```go
func TtmlProfileInput() *string
```

- *Type:* *string

---

##### `TtmlProfile`<sup>Required</sup> <a name="TtmlProfile" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.ttmlProfile"></a>

```go
func TtmlProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsSubtitleConfigurationTtmlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference <a name="Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingMode">ResetTimingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingSource">ResetTimingSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimingMode` <a name="ResetTimingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingMode"></a>

```go
func ResetTimingMode()
```

##### `ResetTimingSource` <a name="ResetTimingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.resetTimingSource"></a>

```go
func ResetTimingSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingModeInput">TimingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSourceInput">TimingSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode">TimingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource">TimingSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimingModeInput`<sup>Optional</sup> <a name="TimingModeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingModeInput"></a>

```go
func TimingModeInput() *string
```

- *Type:* *string

---

##### `TimingSourceInput`<sup>Optional</sup> <a name="TimingSourceInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSourceInput"></a>

```go
func TimingSourceInput() *string
```

- *Type:* *string

---

##### `TimingMode`<sup>Required</sup> <a name="TimingMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingMode"></a>

```go
func TimingMode() *string
```

- *Type:* *string

---

##### `TimingSource`<sup>Required</sup> <a name="TimingSource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.timingSource"></a>

```go
func TimingSource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointDashManifestsUtcTimingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference <a name="Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resetEndpointErrorConditions">ResetEndpointErrorConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointErrorConditions` <a name="ResetEndpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.resetEndpointErrorConditions"></a>

```go
func ResetEndpointErrorConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditionsInput">EndpointErrorConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions">EndpointErrorConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointErrorConditionsInput`<sup>Optional</sup> <a name="EndpointErrorConditionsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditionsInput"></a>

```go
func EndpointErrorConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndpointErrorConditions`<sup>Required</sup> <a name="EndpointErrorConditions" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.endpointErrorConditions"></a>

```go
func EndpointErrorConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointForceEndpointErrorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetClipStartTime">ResetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetDrmSettings">ResetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetManifestFilter">ResetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">ResetTimeDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClipStartTime` <a name="ResetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```go
func ResetClipStartTime()
```

##### `ResetDrmSettings` <a name="ResetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```go
func ResetDrmSettings()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetManifestFilter` <a name="ResetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```go
func ResetManifestFilter()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetStart"></a>

```go
func ResetStart()
```

##### `ResetTimeDelaySeconds` <a name="ResetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```go
func ResetTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">ClipStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput">DrmSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput">ManifestFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">TimeDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTimeInput`<sup>Optional</sup> <a name="ClipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```go
func ClipStartTimeInput() *string
```

- *Type:* *string

---

##### `DrmSettingsInput`<sup>Optional</sup> <a name="DrmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```go
func DrmSettingsInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `ManifestFilterInput`<sup>Optional</sup> <a name="ManifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```go
func ManifestFilterInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeDelaySecondsInput`<sup>Optional</sup> <a name="TimeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```go
func TimeDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointHlsManifestsList <a name="Mediapackagev2OriginEndpointHlsManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointHlsManifestsOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls">PutScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag">PutStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetChildManifestName">ResetChildManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetScteHls">ResetScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetStartTag">ResetStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUriPathType">ResetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrlEncodeChildManifest">ResetUrlEncodeChildManifest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointHlsManifestsFilterConfiguration</a>

---

##### `PutScteHls` <a name="PutScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls"></a>

```go
func PutScteHls(value Mediapackagev2OriginEndpointHlsManifestsScteHls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putScteHls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHls">Mediapackagev2OriginEndpointHlsManifestsScteHls</a>

---

##### `PutStartTag` <a name="PutStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag"></a>

```go
func PutStartTag(value Mediapackagev2OriginEndpointHlsManifestsStartTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.putStartTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTag">Mediapackagev2OriginEndpointHlsManifestsStartTag</a>

---

##### `ResetChildManifestName` <a name="ResetChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetChildManifestName"></a>

```go
func ResetChildManifestName()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```go
func ResetProgramDateTimeIntervalSeconds()
```

##### `ResetScteHls` <a name="ResetScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetScteHls"></a>

```go
func ResetScteHls()
```

##### `ResetStartTag` <a name="ResetStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetStartTag"></a>

```go
func ResetStartTag()
```

##### `ResetUriPathType` <a name="ResetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUriPathType"></a>

```go
func ResetUriPathType()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlEncodeChildManifest` <a name="ResetUrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.resetUrlEncodeChildManifest"></a>

```go
func ResetUrlEncodeChildManifest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestNameInput">ChildManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHlsInput">ScteHlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTagInput">StartTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathTypeInput">UriPathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifestInput">UrlEncodeChildManifestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHls"></a>

```go
func ScteHls() Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTag"></a>

```go
func StartTag() Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference</a>

---

##### `ChildManifestNameInput`<sup>Optional</sup> <a name="ChildManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestNameInput"></a>

```go
func ChildManifestNameInput() *string
```

- *Type:* *string

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```go
func ProgramDateTimeIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `ScteHlsInput`<sup>Optional</sup> <a name="ScteHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.scteHlsInput"></a>

```go
func ScteHlsInput() interface{}
```

- *Type:* interface{}

---

##### `StartTagInput`<sup>Optional</sup> <a name="StartTagInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.startTagInput"></a>

```go
func StartTagInput() interface{}
```

- *Type:* interface{}

---

##### `UriPathTypeInput`<sup>Optional</sup> <a name="UriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathTypeInput"></a>

```go
func UriPathTypeInput() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifestInput`<sup>Optional</sup> <a name="UrlEncodeChildManifestInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifestInput"></a>

```go
func UrlEncodeChildManifestInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.childManifestName"></a>

```go
func ChildManifestName() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```go
func UrlEncodeChildManifest() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetAdMarkerHls">ResetAdMarkerHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetScteInManifests">ResetScteInManifests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdMarkerHls` <a name="ResetAdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetAdMarkerHls"></a>

```go
func ResetAdMarkerHls()
```

##### `ResetScteInManifests` <a name="ResetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.resetScteInManifests"></a>

```go
func ResetScteInManifests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput">AdMarkerHlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifestsInput">ScteInManifestsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerHlsInput`<sup>Optional</sup> <a name="AdMarkerHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput"></a>

```go
func AdMarkerHlsInput() *string
```

- *Type:* *string

---

##### `ScteInManifestsInput`<sup>Optional</sup> <a name="ScteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifestsInput"></a>

```go
func ScteInManifestsInput() *string
```

- *Type:* *string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```go
func AdMarkerHls() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference <a name="Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointHlsManifestsStartTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetPrecise">ResetPrecise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetTimeOffset">ResetTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrecise` <a name="ResetPrecise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetPrecise"></a>

```go
func ResetPrecise()
```

##### `ResetTimeOffset` <a name="ResetTimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.resetTimeOffset"></a>

```go
func ResetTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.preciseInput">PreciseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffsetInput">TimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreciseInput`<sup>Optional</sup> <a name="PreciseInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.preciseInput"></a>

```go
func PreciseInput() interface{}
```

- *Type:* interface{}

---

##### `TimeOffsetInput`<sup>Optional</sup> <a name="TimeOffsetInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffsetInput"></a>

```go
func TimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.precise"></a>

```go
func Precise() interface{}
```

- *Type:* interface{}

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```go
func TimeOffset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointHlsManifestsStartTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetClipStartTime">ResetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetDrmSettings">ResetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetManifestFilter">ResetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">ResetTimeDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClipStartTime` <a name="ResetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```go
func ResetClipStartTime()
```

##### `ResetDrmSettings` <a name="ResetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```go
func ResetDrmSettings()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetManifestFilter` <a name="ResetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```go
func ResetManifestFilter()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetStart"></a>

```go
func ResetStart()
```

##### `ResetTimeDelaySeconds` <a name="ResetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```go
func ResetTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">ClipStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput">DrmSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput">ManifestFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">TimeDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTimeInput`<sup>Optional</sup> <a name="ClipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```go
func ClipStartTimeInput() *string
```

- *Type:* *string

---

##### `DrmSettingsInput`<sup>Optional</sup> <a name="DrmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```go
func DrmSettingsInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `ManifestFilterInput`<sup>Optional</sup> <a name="ManifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```go
func ManifestFilterInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeDelaySecondsInput`<sup>Optional</sup> <a name="TimeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```go
func TimeDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsList <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointLowLatencyHlsManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointLowLatencyHlsManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls">PutScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag">PutStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetChildManifestName">ResetChildManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetScteHls">ResetScteHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetStartTag">ResetStartTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUriPathType">ResetUriPathType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrlEncodeChildManifest">ResetUrlEncodeChildManifest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfiguration</a>

---

##### `PutScteHls` <a name="PutScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls"></a>

```go
func PutScteHls(value Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putScteHls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHls</a>

---

##### `PutStartTag` <a name="PutStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag"></a>

```go
func PutStartTag(value Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.putStartTag.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTag</a>

---

##### `ResetChildManifestName` <a name="ResetChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetChildManifestName"></a>

```go
func ResetChildManifestName()
```

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```go
func ResetProgramDateTimeIntervalSeconds()
```

##### `ResetScteHls` <a name="ResetScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetScteHls"></a>

```go
func ResetScteHls()
```

##### `ResetStartTag` <a name="ResetStartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetStartTag"></a>

```go
func ResetStartTag()
```

##### `ResetUriPathType` <a name="ResetUriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUriPathType"></a>

```go
func ResetUriPathType()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUrlEncodeChildManifest` <a name="ResetUrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.resetUrlEncodeChildManifest"></a>

```go
func ResetUrlEncodeChildManifest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls">ScteHls</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag">StartTag</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestNameInput">ChildManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHlsInput">ScteHlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTagInput">StartTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathTypeInput">UriPathTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifestInput">UrlEncodeChildManifestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName">ChildManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType">UriPathType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest">UrlEncodeChildManifest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsFilterConfigurationOutputReference</a>

---

##### `ScteHls`<sup>Required</sup> <a name="ScteHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHls"></a>

```go
func ScteHls() Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference</a>

---

##### `StartTag`<sup>Required</sup> <a name="StartTag" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTag"></a>

```go
func StartTag() Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference">Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference</a>

---

##### `ChildManifestNameInput`<sup>Optional</sup> <a name="ChildManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestNameInput"></a>

```go
func ChildManifestNameInput() *string
```

- *Type:* *string

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```go
func ProgramDateTimeIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `ScteHlsInput`<sup>Optional</sup> <a name="ScteHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.scteHlsInput"></a>

```go
func ScteHlsInput() interface{}
```

- *Type:* interface{}

---

##### `StartTagInput`<sup>Optional</sup> <a name="StartTagInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.startTagInput"></a>

```go
func StartTagInput() interface{}
```

- *Type:* interface{}

---

##### `UriPathTypeInput`<sup>Optional</sup> <a name="UriPathTypeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathTypeInput"></a>

```go
func UriPathTypeInput() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifestInput`<sup>Optional</sup> <a name="UrlEncodeChildManifestInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifestInput"></a>

```go
func UrlEncodeChildManifestInput() interface{}
```

- *Type:* interface{}

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `ChildManifestName`<sup>Required</sup> <a name="ChildManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.childManifestName"></a>

```go
func ChildManifestName() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```go
func ProgramDateTimeIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `UriPathType`<sup>Required</sup> <a name="UriPathType" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.uriPathType"></a>

```go
func UriPathType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UrlEncodeChildManifest`<sup>Required</sup> <a name="UrlEncodeChildManifest" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.urlEncodeChildManifest"></a>

```go
func UrlEncodeChildManifest() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetAdMarkerHls">ResetAdMarkerHls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetScteInManifests">ResetScteInManifests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdMarkerHls` <a name="ResetAdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetAdMarkerHls"></a>

```go
func ResetAdMarkerHls()
```

##### `ResetScteInManifests` <a name="ResetScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.resetScteInManifests"></a>

```go
func ResetScteInManifests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput">AdMarkerHlsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifestsInput">ScteInManifestsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls">AdMarkerHls</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests">ScteInManifests</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdMarkerHlsInput`<sup>Optional</sup> <a name="AdMarkerHlsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHlsInput"></a>

```go
func AdMarkerHlsInput() *string
```

- *Type:* *string

---

##### `ScteInManifestsInput`<sup>Optional</sup> <a name="ScteInManifestsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifestsInput"></a>

```go
func ScteInManifestsInput() *string
```

- *Type:* *string

---

##### `AdMarkerHls`<sup>Required</sup> <a name="AdMarkerHls" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.adMarkerHls"></a>

```go
func AdMarkerHls() *string
```

- *Type:* *string

---

##### `ScteInManifests`<sup>Required</sup> <a name="ScteInManifests" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.scteInManifests"></a>

```go
func ScteInManifests() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsScteHlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference <a name="Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetPrecise">ResetPrecise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetTimeOffset">ResetTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrecise` <a name="ResetPrecise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetPrecise"></a>

```go
func ResetPrecise()
```

##### `ResetTimeOffset` <a name="ResetTimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.resetTimeOffset"></a>

```go
func ResetTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.preciseInput">PreciseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffsetInput">TimeOffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise">Precise</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset">TimeOffset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreciseInput`<sup>Optional</sup> <a name="PreciseInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.preciseInput"></a>

```go
func PreciseInput() interface{}
```

- *Type:* interface{}

---

##### `TimeOffsetInput`<sup>Optional</sup> <a name="TimeOffsetInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffsetInput"></a>

```go
func TimeOffsetInput() *f64
```

- *Type:* *f64

---

##### `Precise`<sup>Required</sup> <a name="Precise" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.precise"></a>

```go
func Precise() interface{}
```

- *Type:* interface{}

---

##### `TimeOffset`<sup>Required</sup> <a name="TimeOffset" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.timeOffset"></a>

```go
func TimeOffset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointLowLatencyHlsManifestsStartTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference <a name="Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetClipStartTime">ResetClipStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetDrmSettings">ResetDrmSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetManifestFilter">ResetManifestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetStart">ResetStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds">ResetTimeDelaySeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClipStartTime` <a name="ResetClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetClipStartTime"></a>

```go
func ResetClipStartTime()
```

##### `ResetDrmSettings` <a name="ResetDrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetDrmSettings"></a>

```go
func ResetDrmSettings()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetEnd"></a>

```go
func ResetEnd()
```

##### `ResetManifestFilter` <a name="ResetManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetManifestFilter"></a>

```go
func ResetManifestFilter()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetStart"></a>

```go
func ResetStart()
```

##### `ResetTimeDelaySeconds` <a name="ResetTimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.resetTimeDelaySeconds"></a>

```go
func ResetTimeDelaySeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTimeInput">ClipStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettingsInput">DrmSettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.endInput">EndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilterInput">ManifestFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.startInput">StartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput">TimeDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime">ClipStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings">DrmSettings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end">End</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter">ManifestFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start">Start</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds">TimeDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClipStartTimeInput`<sup>Optional</sup> <a name="ClipStartTimeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTimeInput"></a>

```go
func ClipStartTimeInput() *string
```

- *Type:* *string

---

##### `DrmSettingsInput`<sup>Optional</sup> <a name="DrmSettingsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettingsInput"></a>

```go
func DrmSettingsInput() *string
```

- *Type:* *string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.endInput"></a>

```go
func EndInput() *string
```

- *Type:* *string

---

##### `ManifestFilterInput`<sup>Optional</sup> <a name="ManifestFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilterInput"></a>

```go
func ManifestFilterInput() *string
```

- *Type:* *string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.startInput"></a>

```go
func StartInput() *string
```

- *Type:* *string

---

##### `TimeDelaySecondsInput`<sup>Optional</sup> <a name="TimeDelaySecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySecondsInput"></a>

```go
func TimeDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `ClipStartTime`<sup>Required</sup> <a name="ClipStartTime" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.clipStartTime"></a>

```go
func ClipStartTime() *string
```

- *Type:* *string

---

##### `DrmSettings`<sup>Required</sup> <a name="DrmSettings" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.drmSettings"></a>

```go
func DrmSettings() *string
```

- *Type:* *string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.end"></a>

```go
func End() *string
```

- *Type:* *string

---

##### `ManifestFilter`<sup>Required</sup> <a name="ManifestFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.manifestFilter"></a>

```go
func ManifestFilter() *string
```

- *Type:* *string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.start"></a>

```go
func Start() *string
```

- *Type:* *string

---

##### `TimeDelaySeconds`<sup>Required</sup> <a name="TimeDelaySeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.timeDelaySeconds"></a>

```go
func TimeDelaySeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointMssManifestsList <a name="Mediapackagev2OriginEndpointMssManifestsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointMssManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointMssManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointMssManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointMssManifestsOutputReference <a name="Mediapackagev2OriginEndpointMssManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointMssManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointMssManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration">PutFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetFilterConfiguration">ResetFilterConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestLayout">ResetManifestLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestWindowSeconds">ResetManifestWindowSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterConfiguration` <a name="PutFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration"></a>

```go
func PutFilterConfiguration(value Mediapackagev2OriginEndpointMssManifestsFilterConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.putFilterConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfiguration">Mediapackagev2OriginEndpointMssManifestsFilterConfiguration</a>

---

##### `ResetFilterConfiguration` <a name="ResetFilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetFilterConfiguration"></a>

```go
func ResetFilterConfiguration()
```

##### `ResetManifestLayout` <a name="ResetManifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestLayout"></a>

```go
func ResetManifestLayout()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestName"></a>

```go
func ResetManifestName()
```

##### `ResetManifestWindowSeconds` <a name="ResetManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.resetManifestWindowSeconds"></a>

```go
func ResetManifestWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration">FilterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfigurationInput">FilterConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayoutInput">ManifestLayoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSecondsInput">ManifestWindowSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds">ManifestWindowSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterConfiguration`<sup>Required</sup> <a name="FilterConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfiguration"></a>

```go
func FilterConfiguration() Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference">Mediapackagev2OriginEndpointMssManifestsFilterConfigurationOutputReference</a>

---

##### `FilterConfigurationInput`<sup>Optional</sup> <a name="FilterConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.filterConfigurationInput"></a>

```go
func FilterConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManifestLayoutInput`<sup>Optional</sup> <a name="ManifestLayoutInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayoutInput"></a>

```go
func ManifestLayoutInput() *string
```

- *Type:* *string

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestNameInput"></a>

```go
func ManifestNameInput() *string
```

- *Type:* *string

---

##### `ManifestWindowSecondsInput`<sup>Optional</sup> <a name="ManifestWindowSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSecondsInput"></a>

```go
func ManifestWindowSecondsInput() *f64
```

- *Type:* *f64

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestLayout"></a>

```go
func ManifestLayout() *string
```

- *Type:* *string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestName"></a>

```go
func ManifestName() *string
```

- *Type:* *string

---

##### `ManifestWindowSeconds`<sup>Required</sup> <a name="ManifestWindowSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.manifestWindowSeconds"></a>

```go
func ManifestWindowSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointMssManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetCmafEncryptionMethod">ResetCmafEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetIsmEncryptionMethod">ResetIsmEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetTsEncryptionMethod">ResetTsEncryptionMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCmafEncryptionMethod` <a name="ResetCmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetCmafEncryptionMethod"></a>

```go
func ResetCmafEncryptionMethod()
```

##### `ResetIsmEncryptionMethod` <a name="ResetIsmEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetIsmEncryptionMethod"></a>

```go
func ResetIsmEncryptionMethod()
```

##### `ResetTsEncryptionMethod` <a name="ResetTsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.resetTsEncryptionMethod"></a>

```go
func ResetTsEncryptionMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethodInput">CmafEncryptionMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethodInput">IsmEncryptionMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethodInput">TsEncryptionMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod">CmafEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod">IsmEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod">TsEncryptionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CmafEncryptionMethodInput`<sup>Optional</sup> <a name="CmafEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethodInput"></a>

```go
func CmafEncryptionMethodInput() *string
```

- *Type:* *string

---

##### `IsmEncryptionMethodInput`<sup>Optional</sup> <a name="IsmEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethodInput"></a>

```go
func IsmEncryptionMethodInput() *string
```

- *Type:* *string

---

##### `TsEncryptionMethodInput`<sup>Optional</sup> <a name="TsEncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethodInput"></a>

```go
func TsEncryptionMethodInput() *string
```

- *Type:* *string

---

##### `CmafEncryptionMethod`<sup>Required</sup> <a name="CmafEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.cmafEncryptionMethod"></a>

```go
func CmafEncryptionMethod() *string
```

- *Type:* *string

---

##### `IsmEncryptionMethod`<sup>Required</sup> <a name="IsmEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.ismEncryptionMethod"></a>

```go
func IsmEncryptionMethod() *string
```

- *Type:* *string

---

##### `TsEncryptionMethod`<sup>Required</sup> <a name="TsEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.tsEncryptionMethod"></a>

```go
func TsEncryptionMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentEncryptionOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod">PutEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetCmafExcludeSegmentDrmMetadata">ResetCmafExcludeSegmentDrmMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetEncryptionMethod">ResetEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetKeyRotationIntervalSeconds">ResetKeyRotationIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionMethod` <a name="PutEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod"></a>

```go
func PutEncryptionMethod(value Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putEncryptionMethod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethod</a>

---

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider"></a>

```go
func PutSpekeKeyProvider(value Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProvider</a>

---

##### `ResetCmafExcludeSegmentDrmMetadata` <a name="ResetCmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetCmafExcludeSegmentDrmMetadata"></a>

```go
func ResetCmafExcludeSegmentDrmMetadata()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetConstantInitializationVector"></a>

```go
func ResetConstantInitializationVector()
```

##### `ResetEncryptionMethod` <a name="ResetEncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetEncryptionMethod"></a>

```go
func ResetEncryptionMethod()
```

##### `ResetKeyRotationIntervalSeconds` <a name="ResetKeyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetKeyRotationIntervalSeconds"></a>

```go
func ResetKeyRotationIntervalSeconds()
```

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.resetSpekeKeyProvider"></a>

```go
func ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadataInput">CmafExcludeSegmentDrmMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethodInput">EncryptionMethodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSecondsInput">KeyRotationIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata">CmafExcludeSegmentDrmMetadata</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds">KeyRotationIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethod"></a>

```go
func EncryptionMethod() Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionEncryptionMethodOutputReference</a>

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProvider"></a>

```go
func SpekeKeyProvider() Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference</a>

---

##### `CmafExcludeSegmentDrmMetadataInput`<sup>Optional</sup> <a name="CmafExcludeSegmentDrmMetadataInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadataInput"></a>

```go
func CmafExcludeSegmentDrmMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```go
func ConstantInitializationVectorInput() *string
```

- *Type:* *string

---

##### `EncryptionMethodInput`<sup>Optional</sup> <a name="EncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.encryptionMethodInput"></a>

```go
func EncryptionMethodInput() interface{}
```

- *Type:* interface{}

---

##### `KeyRotationIntervalSecondsInput`<sup>Optional</sup> <a name="KeyRotationIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSecondsInput"></a>

```go
func KeyRotationIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```go
func SpekeKeyProviderInput() interface{}
```

- *Type:* interface{}

---

##### `CmafExcludeSegmentDrmMetadata`<sup>Required</sup> <a name="CmafExcludeSegmentDrmMetadata" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.cmafExcludeSegmentDrmMetadata"></a>

```go
func CmafExcludeSegmentDrmMetadata() interface{}
```

- *Type:* interface{}

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.constantInitializationVector"></a>

```go
func ConstantInitializationVector() *string
```

- *Type:* *string

---

##### `KeyRotationIntervalSeconds`<sup>Required</sup> <a name="KeyRotationIntervalSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.keyRotationIntervalSeconds"></a>

```go
func KeyRotationIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```go
func ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```go
func ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```go
func PresetSpeke20AudioInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```go
func PresetSpeke20VideoInput() *string
```

- *Type:* *string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```go
func PresetSpeke20Audio() *string
```

- *Type:* *string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```go
func PresetSpeke20Video() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference <a name="Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```go
func PutEncryptionContractConfiguration(value Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetDrmSystems"></a>

```go
func ResetDrmSystems()
```

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```go
func ResetEncryptionContractConfiguration()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems">DrmSystems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```go
func EncryptionContractConfiguration() Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystemsInput"></a>

```go
func DrmSystemsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```go
func EncryptionContractConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.drmSystems"></a>

```go
func DrmSystems() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentOutputReference <a name="Mediapackagev2OriginEndpointSegmentOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte">PutScte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetIncludeIframeOnlyStreams">ResetIncludeIframeOnlyStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetOutputTimestampMode">ResetOutputTimestampMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetScte">ResetScte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentName">ResetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsIncludeDvbSubtitles">ResetTsIncludeDvbSubtitles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsUseAudioRenditionGroup">ResetTsUseAudioRenditionGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption"></a>

```go
func PutEncryption(value Mediapackagev2OriginEndpointSegmentEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryption">Mediapackagev2OriginEndpointSegmentEncryption</a>

---

##### `PutScte` <a name="PutScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte"></a>

```go
func PutScte(value Mediapackagev2OriginEndpointSegmentScte)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.putScte.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScte">Mediapackagev2OriginEndpointSegmentScte</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetIncludeIframeOnlyStreams` <a name="ResetIncludeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetIncludeIframeOnlyStreams"></a>

```go
func ResetIncludeIframeOnlyStreams()
```

##### `ResetOutputTimestampMode` <a name="ResetOutputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetOutputTimestampMode"></a>

```go
func ResetOutputTimestampMode()
```

##### `ResetScte` <a name="ResetScte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetScte"></a>

```go
func ResetScte()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentDurationSeconds"></a>

```go
func ResetSegmentDurationSeconds()
```

##### `ResetSegmentName` <a name="ResetSegmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetSegmentName"></a>

```go
func ResetSegmentName()
```

##### `ResetTsIncludeDvbSubtitles` <a name="ResetTsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsIncludeDvbSubtitles"></a>

```go
func ResetTsIncludeDvbSubtitles()
```

##### `ResetTsUseAudioRenditionGroup` <a name="ResetTsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.resetTsUseAudioRenditionGroup"></a>

```go
func ResetTsUseAudioRenditionGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scte">Scte</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference">Mediapackagev2OriginEndpointSegmentScteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreamsInput">IncludeIframeOnlyStreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampModeInput">OutputTimestampModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scteInput">ScteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentNameInput">SegmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitlesInput">TsIncludeDvbSubtitlesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroupInput">TsUseAudioRenditionGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams">IncludeIframeOnlyStreams</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode">OutputTimestampMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentName">SegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles">TsIncludeDvbSubtitles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup">TsUseAudioRenditionGroup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryption"></a>

```go
func Encryption() Mediapackagev2OriginEndpointSegmentEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentEncryptionOutputReference">Mediapackagev2OriginEndpointSegmentEncryptionOutputReference</a>

---

##### `Scte`<sup>Required</sup> <a name="Scte" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scte"></a>

```go
func Scte() Mediapackagev2OriginEndpointSegmentScteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference">Mediapackagev2OriginEndpointSegmentScteOutputReference</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeIframeOnlyStreamsInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreamsInput"></a>

```go
func IncludeIframeOnlyStreamsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputTimestampModeInput`<sup>Optional</sup> <a name="OutputTimestampModeInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampModeInput"></a>

```go
func OutputTimestampModeInput() *string
```

- *Type:* *string

---

##### `ScteInput`<sup>Optional</sup> <a name="ScteInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.scteInput"></a>

```go
func ScteInput() interface{}
```

- *Type:* interface{}

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSecondsInput"></a>

```go
func SegmentDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `SegmentNameInput`<sup>Optional</sup> <a name="SegmentNameInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentNameInput"></a>

```go
func SegmentNameInput() *string
```

- *Type:* *string

---

##### `TsIncludeDvbSubtitlesInput`<sup>Optional</sup> <a name="TsIncludeDvbSubtitlesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitlesInput"></a>

```go
func TsIncludeDvbSubtitlesInput() interface{}
```

- *Type:* interface{}

---

##### `TsUseAudioRenditionGroupInput`<sup>Optional</sup> <a name="TsUseAudioRenditionGroupInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroupInput"></a>

```go
func TsUseAudioRenditionGroupInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeIframeOnlyStreams`<sup>Required</sup> <a name="IncludeIframeOnlyStreams" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.includeIframeOnlyStreams"></a>

```go
func IncludeIframeOnlyStreams() interface{}
```

- *Type:* interface{}

---

##### `OutputTimestampMode`<sup>Required</sup> <a name="OutputTimestampMode" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.outputTimestampMode"></a>

```go
func OutputTimestampMode() *string
```

- *Type:* *string

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentDurationSeconds"></a>

```go
func SegmentDurationSeconds() *f64
```

- *Type:* *f64

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.segmentName"></a>

```go
func SegmentName() *string
```

- *Type:* *string

---

##### `TsIncludeDvbSubtitles`<sup>Required</sup> <a name="TsIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsIncludeDvbSubtitles"></a>

```go
func TsIncludeDvbSubtitles() interface{}
```

- *Type:* interface{}

---

##### `TsUseAudioRenditionGroup`<sup>Required</sup> <a name="TsUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.tsUseAudioRenditionGroup"></a>

```go
func TsUseAudioRenditionGroup() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointSegmentScteOutputReference <a name="Mediapackagev2OriginEndpointSegmentScteOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointSegmentScteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Mediapackagev2OriginEndpointSegmentScteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetCustomAdTypes">ResetCustomAdTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteFilter">ResetScteFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteInSegments">ResetScteInSegments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomAdTypes` <a name="ResetCustomAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetCustomAdTypes"></a>

```go
func ResetCustomAdTypes()
```

##### `ResetScteFilter` <a name="ResetScteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteFilter"></a>

```go
func ResetScteFilter()
```

##### `ResetScteInSegments` <a name="ResetScteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.resetScteInSegments"></a>

```go
func ResetScteInSegments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypesInput">CustomAdTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilterInput">ScteFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegmentsInput">ScteInSegmentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes">CustomAdTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter">ScteFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments">ScteInSegments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomAdTypesInput`<sup>Optional</sup> <a name="CustomAdTypesInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypesInput"></a>

```go
func CustomAdTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScteFilterInput`<sup>Optional</sup> <a name="ScteFilterInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilterInput"></a>

```go
func ScteFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScteInSegmentsInput`<sup>Optional</sup> <a name="ScteInSegmentsInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegmentsInput"></a>

```go
func ScteInSegmentsInput() *string
```

- *Type:* *string

---

##### `CustomAdTypes`<sup>Required</sup> <a name="CustomAdTypes" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.customAdTypes"></a>

```go
func CustomAdTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScteFilter`<sup>Required</sup> <a name="ScteFilter" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteFilter"></a>

```go
func ScteFilter() *[]*string
```

- *Type:* *[]*string

---

##### `ScteInSegments`<sup>Required</sup> <a name="ScteInSegments" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.scteInSegments"></a>

```go
func ScteInSegments() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointSegmentScteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointTagsList <a name="Mediapackagev2OriginEndpointTagsList" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Mediapackagev2OriginEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get"></a>

```go
func Get(index *f64) Mediapackagev2OriginEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Mediapackagev2OriginEndpointTagsOutputReference <a name="Mediapackagev2OriginEndpointTagsOutputReference" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediapackagev2originendpoint"

mediapackagev2originendpoint.NewMediapackagev2OriginEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Mediapackagev2OriginEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagev2OriginEndpoint.Mediapackagev2OriginEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



