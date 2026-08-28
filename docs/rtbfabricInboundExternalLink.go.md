# `rtbfabricInboundExternalLink` Submodule <a name="`rtbfabricInboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricInboundExternalLink <a name="RtbfabricInboundExternalLink" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLink(scope Construct, id *string, config RtbfabricInboundExternalLinkConfig) RtbfabricInboundExternalLink
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes">PutLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings">PutLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes">ResetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinkAttributes` <a name="PutLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes"></a>

```go
func PutLinkAttributes(value RtbfabricInboundExternalLinkLinkAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---

##### `PutLinkLogSettings` <a name="PutLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings"></a>

```go
func PutLinkLogSettings(value RtbfabricInboundExternalLinkLinkLogSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLinkAttributes` <a name="ResetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes"></a>

```go
func ResetLinkAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.RtbfabricInboundExternalLink_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.RtbfabricInboundExternalLink_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.RtbfabricInboundExternalLink_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.RtbfabricInboundExternalLink_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RtbfabricInboundExternalLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RtbfabricInboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricInboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId">LinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus">LinkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput">LinkAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput">LinkLogSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LinkAttributes`<sup>Required</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes"></a>

```go
func LinkAttributes() RtbfabricInboundExternalLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a>

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId"></a>

```go
func LinkId() *string
```

- *Type:* *string

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings"></a>

```go
func LinkLogSettings() RtbfabricInboundExternalLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `LinkStatus`<sup>Required</sup> <a name="LinkStatus" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus"></a>

```go
func LinkStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags"></a>

```go
func Tags() RtbfabricInboundExternalLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `LinkAttributesInput`<sup>Optional</sup> <a name="LinkAttributesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput"></a>

```go
func LinkAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `LinkLogSettingsInput`<sup>Optional</sup> <a name="LinkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput"></a>

```go
func LinkLogSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricInboundExternalLinkConfig <a name="RtbfabricInboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayId: *string,
	LinkLogSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings,
	LinkAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}.

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings"></a>

```go
LinkLogSettings RtbfabricInboundExternalLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}.

---

##### `LinkAttributes`<sup>Optional</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes"></a>

```go
LinkAttributes RtbfabricInboundExternalLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#tags RtbfabricInboundExternalLink#tags}

---

### RtbfabricInboundExternalLinkLinkAttributes <a name="RtbfabricInboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkLinkAttributes {
	CustomerProvidedId: *string,
	ResponderErrorMasking: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId">CustomerProvidedId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}. |

---

##### `CustomerProvidedId`<sup>Optional</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```go
CustomerProvidedId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}.

---

##### `ResponderErrorMasking`<sup>Optional</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```go
ResponderErrorMasking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}.

---

### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking {
	Action: *string,
	HttpCode: *string,
	LoggingTypes: *[]*string,
	ResponseLoggingPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">HttpCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">LoggingTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}.

---

##### `HttpCode`<sup>Optional</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```go
HttpCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}.

---

##### `LoggingTypes`<sup>Optional</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```go
LoggingTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}.

---

##### `ResponseLoggingPercentage`<sup>Optional</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```go
ResponseLoggingPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}.

---

### RtbfabricInboundExternalLinkLinkLogSettings <a name="RtbfabricInboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkLinkLogSettings {
	ApplicationLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}. |

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```go
ApplicationLogs RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs {
	LinkApplicationLogSampling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}. |

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```go
LinkApplicationLogSampling RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
	ErrorLog: *f64,
	FilterLog: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">ErrorLog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">FilterLog</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}. |

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```go
ErrorLog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}.

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```go
FilterLog *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}.

---

### RtbfabricInboundExternalLinkTags <a name="RtbfabricInboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

&rtbfabricinboundexternallink.RtbfabricInboundExternalLinkTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#key RtbfabricInboundExternalLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rtbfabric_inbound_external_link#value RtbfabricInboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricInboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricInboundExternalLinkLinkAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">PutResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">ResetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">ResetResponderErrorMasking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponderErrorMasking` <a name="PutResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```go
func PutResponderErrorMasking(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomerProvidedId` <a name="ResetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```go
func ResetCustomerProvidedId()
```

##### `ResetResponderErrorMasking` <a name="ResetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```go
func ResetResponderErrorMasking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">CustomerProvidedIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">ResponderErrorMaskingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">CustomerProvidedId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponderErrorMasking`<sup>Required</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```go
func ResponderErrorMasking() RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `CustomerProvidedIdInput`<sup>Optional</sup> <a name="CustomerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```go
func CustomerProvidedIdInput() *string
```

- *Type:* *string

---

##### `ResponderErrorMaskingInput`<sup>Optional</sup> <a name="ResponderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```go
func ResponderErrorMaskingInput() interface{}
```

- *Type:* interface{}

---

##### `CustomerProvidedId`<sup>Required</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```go
func CustomerProvidedId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```go
func Get(index *f64) RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">ResetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">ResetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">ResetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetHttpCode` <a name="ResetHttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```go
func ResetHttpCode()
```

##### `ResetLoggingTypes` <a name="ResetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```go
func ResetLoggingTypes()
```

##### `ResetResponseLoggingPercentage` <a name="ResetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```go
func ResetResponseLoggingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">HttpCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">LoggingTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">ResponseLoggingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">HttpCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">LoggingTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `HttpCodeInput`<sup>Optional</sup> <a name="HttpCodeInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```go
func HttpCodeInput() *string
```

- *Type:* *string

---

##### `LoggingTypesInput`<sup>Optional</sup> <a name="LoggingTypesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```go
func LoggingTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseLoggingPercentageInput`<sup>Optional</sup> <a name="ResponseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```go
func ResponseLoggingPercentageInput() *f64
```

- *Type:* *f64

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `HttpCode`<sup>Required</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```go
func HttpCode() *string
```

- *Type:* *string

---

##### `LoggingTypes`<sup>Required</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```go
func LoggingTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ResponseLoggingPercentage`<sup>Required</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```go
func ResponseLoggingPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">ErrorLogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">FilterLogInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">ErrorLog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">FilterLog</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorLogInput`<sup>Optional</sup> <a name="ErrorLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```go
func ErrorLogInput() *f64
```

- *Type:* *f64

---

##### `FilterLogInput`<sup>Optional</sup> <a name="FilterLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```go
func FilterLogInput() *f64
```

- *Type:* *f64

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```go
func ErrorLog() *f64
```

- *Type:* *f64

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```go
func FilterLog() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">PutLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinkApplicationLogSampling` <a name="PutLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```go
func PutLinkApplicationLogSampling(value RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">LinkApplicationLogSamplingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```go
func LinkApplicationLogSampling() RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `LinkApplicationLogSamplingInput`<sup>Optional</sup> <a name="LinkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```go
func LinkApplicationLogSamplingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkLinkLogSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricInboundExternalLinkLinkLogSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">PutApplicationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationLogs` <a name="PutApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```go
func PutApplicationLogs(value RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">ApplicationLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```go
func ApplicationLogs() RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `ApplicationLogsInput`<sup>Optional</sup> <a name="ApplicationLogsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```go
func ApplicationLogsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkTagsList <a name="RtbfabricInboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricInboundExternalLinkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get"></a>

```go
func Get(index *f64) RtbfabricInboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricInboundExternalLinkTagsOutputReference <a name="RtbfabricInboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricinboundexternallink"

rtbfabricinboundexternallink.NewRtbfabricInboundExternalLinkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricInboundExternalLinkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



