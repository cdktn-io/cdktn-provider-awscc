# `sesMultiRegionEndpoint` Submodule <a name="`sesMultiRegionEndpoint` Submodule" id="@cdktn/provider-awscc.sesMultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesMultiRegionEndpoint <a name="SesMultiRegionEndpoint" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint awscc_ses_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpoint(scope Construct, id *string, config SesMultiRegionEndpointConfig) SesMultiRegionEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig">SesMultiRegionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig">SesMultiRegionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails"></a>

```go
func PutDetails(value SesMultiRegionEndpointDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SesMultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.SesMultiRegionEndpoint_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.SesMultiRegionEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.SesMultiRegionEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.SesMultiRegionEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SesMultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SesMultiRegionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SesMultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SesMultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.details">Details</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference">SesMultiRegionEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList">SesMultiRegionEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.detailsInput">DetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.details"></a>

```go
func Details() SesMultiRegionEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference">SesMultiRegionEndpointDetailsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tags"></a>

```go
func Tags() SesMultiRegionEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList">SesMultiRegionEndpointTagsList</a>

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.detailsInput"></a>

```go
func DetailsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SesMultiRegionEndpointConfig <a name="SesMultiRegionEndpointConfig" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

&sesmultiregionendpoint.SesMultiRegionEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Details: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails,
	EndpointName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a></code> | Contains details of a multi-region endpoint (global-endpoint) being created. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the multi-region endpoint (global-endpoint). |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.details"></a>

```go
Details SesMultiRegionEndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails">SesMultiRegionEndpointDetails</a>

Contains details of a multi-region endpoint (global-endpoint) being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#details SesMultiRegionEndpoint#details}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#endpoint_name SesMultiRegionEndpoint#endpoint_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An Array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#tags SesMultiRegionEndpoint#tags}

---

### SesMultiRegionEndpointDetails <a name="SesMultiRegionEndpointDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

&sesmultiregionendpoint.SesMultiRegionEndpointDetails {
	RouteDetails: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.property.routeDetails">RouteDetails</a></code> | <code>interface{}</code> | A list of route configuration details. Must contain exactly one route configuration. |

---

##### `RouteDetails`<sup>Required</sup> <a name="RouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetails.property.routeDetails"></a>

```go
RouteDetails interface{}
```

- *Type:* interface{}

A list of route configuration details. Must contain exactly one route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#route_details SesMultiRegionEndpoint#route_details}

---

### SesMultiRegionEndpointDetailsRouteDetails <a name="SesMultiRegionEndpointDetailsRouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

&sesmultiregionendpoint.SesMultiRegionEndpointDetailsRouteDetails {
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.property.region">Region</a></code> | <code>*string</code> | The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint). |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetails.property.region"></a>

```go
Region *string
```

- *Type:* *string

The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#region SesMultiRegionEndpoint#region}

---

### SesMultiRegionEndpointTags <a name="SesMultiRegionEndpointTags" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

&sesmultiregionendpoint.SesMultiRegionEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.key">Key</a></code> | <code>*string</code> | One part of a key-value pair that defines a tag. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.value">Value</a></code> | <code>*string</code> | The optional part of a key-value pair that defines a tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

One part of a key-value pair that defines a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#key SesMultiRegionEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The optional part of a key-value pair that defines a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ses_multi_region_endpoint#value SesMultiRegionEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SesMultiRegionEndpointDetailsOutputReference <a name="SesMultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SesMultiRegionEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails">PutRouteDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRouteDetails` <a name="PutRouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails"></a>

```go
func PutRouteDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.putRouteDetails.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetails">RouteDetails</a></code> | <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList">SesMultiRegionEndpointDetailsRouteDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetailsInput">RouteDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RouteDetails`<sup>Required</sup> <a name="RouteDetails" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetails"></a>

```go
func RouteDetails() SesMultiRegionEndpointDetailsRouteDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList">SesMultiRegionEndpointDetailsRouteDetailsList</a>

---

##### `RouteDetailsInput`<sup>Optional</sup> <a name="RouteDetailsInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.routeDetailsInput"></a>

```go
func RouteDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesMultiRegionEndpointDetailsRouteDetailsList <a name="SesMultiRegionEndpointDetailsRouteDetailsList" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpointDetailsRouteDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesMultiRegionEndpointDetailsRouteDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get"></a>

```go
func Get(index *f64) SesMultiRegionEndpointDetailsRouteDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesMultiRegionEndpointDetailsRouteDetailsOutputReference <a name="SesMultiRegionEndpointDetailsRouteDetailsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpointDetailsRouteDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesMultiRegionEndpointDetailsRouteDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointDetailsRouteDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesMultiRegionEndpointTagsList <a name="SesMultiRegionEndpointTagsList" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SesMultiRegionEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get"></a>

```go
func Get(index *f64) SesMultiRegionEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SesMultiRegionEndpointTagsOutputReference <a name="SesMultiRegionEndpointTagsOutputReference" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sesmultiregionendpoint"

sesmultiregionendpoint.NewSesMultiRegionEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SesMultiRegionEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sesMultiRegionEndpoint.SesMultiRegionEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



