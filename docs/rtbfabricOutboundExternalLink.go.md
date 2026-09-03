# `rtbfabricOutboundExternalLink` Submodule <a name="`rtbfabricOutboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricOutboundExternalLink <a name="RtbfabricOutboundExternalLink" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLink(scope Construct, id *string, config RtbfabricOutboundExternalLinkConfig) RtbfabricOutboundExternalLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig">RtbfabricOutboundExternalLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig">RtbfabricOutboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes">PutLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings">PutLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes">ResetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinkAttributes` <a name="PutLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes"></a>

```go
func PutLinkAttributes(value RtbfabricOutboundExternalLinkLinkAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

---

##### `PutLinkLogSettings` <a name="PutLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings"></a>

```go
func PutLinkLogSettings(value RtbfabricOutboundExternalLinkLinkLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLinkAttributes` <a name="ResetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetLinkAttributes"></a>

```go
func ResetLinkAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.RtbfabricOutboundExternalLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.RtbfabricOutboundExternalLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.RtbfabricOutboundExternalLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.RtbfabricOutboundExternalLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RtbfabricOutboundExternalLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RtbfabricOutboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricOutboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus">LinkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput">LinkAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput">LinkLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput">PublicEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint">PublicEndpoint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkAttributes`<sup>Required</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributes"></a>

```go
func LinkAttributes() RtbfabricOutboundExternalLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference">RtbfabricOutboundExternalLinkLinkAttributesOutputReference</a>

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettings"></a>

```go
func LinkLogSettings() RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `LinkStatus`<sup>Required</sup> <a name="LinkStatus" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkStatus"></a>

```go
func LinkStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tags"></a>

```go
func Tags() RtbfabricOutboundExternalLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList">RtbfabricOutboundExternalLinkTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `LinkAttributesInput`<sup>Optional</sup> <a name="LinkAttributesInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkAttributesInput"></a>

```go
func LinkAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `LinkLogSettingsInput`<sup>Optional</sup> <a name="LinkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.linkLogSettingsInput"></a>

```go
func LinkLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PublicEndpointInput`<sup>Optional</sup> <a name="PublicEndpointInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpointInput"></a>

```go
func PublicEndpointInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.publicEndpoint"></a>

```go
func PublicEndpoint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricOutboundExternalLinkConfig <a name="RtbfabricOutboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	LinkLogSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings,
	PublicEndpoint: *string,
	LinkAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint">PublicEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#gateway_id RtbfabricOutboundExternalLink#gateway_id}.

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkLogSettings"></a>

```go
LinkLogSettings RtbfabricOutboundExternalLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings">RtbfabricOutboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_log_settings RtbfabricOutboundExternalLink#link_log_settings}.

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.publicEndpoint"></a>

```go
PublicEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#public_endpoint RtbfabricOutboundExternalLink#public_endpoint}.

---

##### `LinkAttributes`<sup>Optional</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.linkAttributes"></a>

```go
LinkAttributes RtbfabricOutboundExternalLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes">RtbfabricOutboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_attributes RtbfabricOutboundExternalLink#link_attributes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#tags RtbfabricOutboundExternalLink#tags}

---

### RtbfabricOutboundExternalLinkLinkAttributes <a name="RtbfabricOutboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkLinkAttributes {
	CustomerProvidedId: *string,
	ResponderErrorMasking: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId">CustomerProvidedId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}. |

---

##### `CustomerProvidedId`<sup>Optional</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```go
CustomerProvidedId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#customer_provided_id RtbfabricOutboundExternalLink#customer_provided_id}.

---

##### `ResponderErrorMasking`<sup>Optional</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```go
ResponderErrorMasking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#responder_error_masking RtbfabricOutboundExternalLink#responder_error_masking}.

---

### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking {
	Action: *string,
	HttpCode: *string,
	LoggingTypes: *[]*string,
	ResponseLoggingPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">HttpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">LoggingTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#action RtbfabricOutboundExternalLink#action}.

---

##### `HttpCode`<sup>Optional</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```go
HttpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#http_code RtbfabricOutboundExternalLink#http_code}.

---

##### `LoggingTypes`<sup>Optional</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```go
LoggingTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#logging_types RtbfabricOutboundExternalLink#logging_types}.

---

##### `ResponseLoggingPercentage`<sup>Optional</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```go
ResponseLoggingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#response_logging_percentage RtbfabricOutboundExternalLink#response_logging_percentage}.

---

### RtbfabricOutboundExternalLinkLinkLogSettings <a name="RtbfabricOutboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkLinkLogSettings {
	ApplicationLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}. |

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```go
ApplicationLogs RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#application_logs RtbfabricOutboundExternalLink#application_logs}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs {
	LinkApplicationLogSampling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}. |

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```go
LinkApplicationLogSampling RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#link_application_log_sampling RtbfabricOutboundExternalLink#link_application_log_sampling}.

---

### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
	ErrorLog: *f64,
	FilterLog: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">ErrorLog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">FilterLog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}. |

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```go
ErrorLog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#error_log RtbfabricOutboundExternalLink#error_log}.

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```go
FilterLog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#filter_log RtbfabricOutboundExternalLink#filter_log}.

---

### RtbfabricOutboundExternalLinkTags <a name="RtbfabricOutboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

&rtbfabricoutboundexternallink.RtbfabricOutboundExternalLinkTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#key RtbfabricOutboundExternalLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_outbound_external_link#value RtbfabricOutboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricOutboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricOutboundExternalLinkLinkAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">PutResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">ResetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">ResetResponderErrorMasking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponderErrorMasking` <a name="PutResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```go
func PutResponderErrorMasking(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomerProvidedId` <a name="ResetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```go
func ResetCustomerProvidedId()
```

##### `ResetResponderErrorMasking` <a name="ResetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```go
func ResetResponderErrorMasking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">CustomerProvidedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">ResponderErrorMaskingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">CustomerProvidedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponderErrorMasking`<sup>Required</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```go
func ResponderErrorMasking() RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `CustomerProvidedIdInput`<sup>Optional</sup> <a name="CustomerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```go
func CustomerProvidedIdInput() *string
```

- *Type:* *string

---

##### `ResponderErrorMaskingInput`<sup>Optional</sup> <a name="ResponderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```go
func ResponderErrorMaskingInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerProvidedId`<sup>Required</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```go
func CustomerProvidedId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```go
func Get(index *f64) RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">ResetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">ResetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">ResetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHttpCode` <a name="ResetHttpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```go
func ResetHttpCode()
```

##### `ResetLoggingTypes` <a name="ResetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```go
func ResetLoggingTypes()
```

##### `ResetResponseLoggingPercentage` <a name="ResetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```go
func ResetResponseLoggingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">HttpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">LoggingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">ResponseLoggingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">HttpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">LoggingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HttpCodeInput`<sup>Optional</sup> <a name="HttpCodeInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```go
func HttpCodeInput() *string
```

- *Type:* *string

---

##### `LoggingTypesInput`<sup>Optional</sup> <a name="LoggingTypesInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```go
func LoggingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseLoggingPercentageInput`<sup>Optional</sup> <a name="ResponseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```go
func ResponseLoggingPercentageInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `HttpCode`<sup>Required</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```go
func HttpCode() *string
```

- *Type:* *string

---

##### `LoggingTypes`<sup>Required</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```go
func LoggingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseLoggingPercentage`<sup>Required</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```go
func ResponseLoggingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">ErrorLogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">FilterLogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">ErrorLog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">FilterLog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorLogInput`<sup>Optional</sup> <a name="ErrorLogInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```go
func ErrorLogInput() *f64
```

- *Type:* *f64

---

##### `FilterLogInput`<sup>Optional</sup> <a name="FilterLogInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```go
func FilterLogInput() *f64
```

- *Type:* *f64

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```go
func ErrorLog() *f64
```

- *Type:* *f64

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```go
func FilterLog() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">PutLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinkApplicationLogSampling` <a name="PutLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```go
func PutLinkApplicationLogSampling(value RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">LinkApplicationLogSamplingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```go
func LinkApplicationLogSampling() RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `LinkApplicationLogSamplingInput`<sup>Optional</sup> <a name="LinkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```go
func LinkApplicationLogSamplingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">PutApplicationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationLogs` <a name="PutApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```go
func PutApplicationLogs(value RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">ApplicationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```go
func ApplicationLogs() RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `ApplicationLogsInput`<sup>Optional</sup> <a name="ApplicationLogsInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```go
func ApplicationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkTagsList <a name="RtbfabricOutboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricOutboundExternalLinkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get"></a>

```go
func Get(index *f64) RtbfabricOutboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricOutboundExternalLinkTagsOutputReference <a name="RtbfabricOutboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricoutboundexternallink"

rtbfabricoutboundexternallink.NewRtbfabricOutboundExternalLinkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricOutboundExternalLinkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricOutboundExternalLink.RtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



