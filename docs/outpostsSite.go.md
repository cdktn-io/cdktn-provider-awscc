# `outpostsSite` Submodule <a name="`outpostsSite` Submodule" id="@cdktn/provider-awscc.outpostsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OutpostsSite <a name="OutpostsSite" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site awscc_outposts_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSite(scope Construct, id *string, config OutpostsSiteConfig) OutpostsSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig">OutpostsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress">PutOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties">PutRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress">PutShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress">ResetOperatingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties">ResetRackPhysicalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress">ResetShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOperatingAddress` <a name="PutOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress"></a>

```go
func PutOperatingAddress(value OutpostsSiteOperatingAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putOperatingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

---

##### `PutRackPhysicalProperties` <a name="PutRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties"></a>

```go
func PutRackPhysicalProperties(value OutpostsSiteRackPhysicalProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putRackPhysicalProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

---

##### `PutShippingAddress` <a name="PutShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress"></a>

```go
func PutShippingAddress(value OutpostsSiteShippingAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putShippingAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetOperatingAddress` <a name="ResetOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetOperatingAddress"></a>

```go
func ResetOperatingAddress()
```

##### `ResetRackPhysicalProperties` <a name="ResetRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetRackPhysicalProperties"></a>

```go
func ResetRackPhysicalProperties()
```

##### `ResetShippingAddress` <a name="ResetShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetShippingAddress"></a>

```go
func ResetShippingAddress()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.OutpostsSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.OutpostsSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.OutpostsSite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.OutpostsSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OutpostsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OutpostsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OutpostsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OutpostsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress">OperatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties">RackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn">SiteArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput">OperatingAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput">RackPhysicalPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput">ShippingAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OperatingAddress`<sup>Required</sup> <a name="OperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddress"></a>

```go
func OperatingAddress() OutpostsSiteOperatingAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference">OutpostsSiteOperatingAddressOutputReference</a>

---

##### `RackPhysicalProperties`<sup>Required</sup> <a name="RackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalProperties"></a>

```go
func RackPhysicalProperties() OutpostsSiteRackPhysicalPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference">OutpostsSiteRackPhysicalPropertiesOutputReference</a>

---

##### `ShippingAddress`<sup>Required</sup> <a name="ShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddress"></a>

```go
func ShippingAddress() OutpostsSiteShippingAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference">OutpostsSiteShippingAddressOutputReference</a>

---

##### `SiteArn`<sup>Required</sup> <a name="SiteArn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteArn"></a>

```go
func SiteArn() *string
```

- *Type:* *string

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tags"></a>

```go
func Tags() OutpostsSiteTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList">OutpostsSiteTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `OperatingAddressInput`<sup>Optional</sup> <a name="OperatingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.operatingAddressInput"></a>

```go
func OperatingAddressInput() interface{}
```

- *Type:* interface{}

---

##### `RackPhysicalPropertiesInput`<sup>Optional</sup> <a name="RackPhysicalPropertiesInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.rackPhysicalPropertiesInput"></a>

```go
func RackPhysicalPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `ShippingAddressInput`<sup>Optional</sup> <a name="ShippingAddressInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.shippingAddressInput"></a>

```go
func ShippingAddressInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OutpostsSiteConfig <a name="OutpostsSiteConfig" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

&outpostssite.OutpostsSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Notes: *string,
	OperatingAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.outpostsSite.OutpostsSiteOperatingAddress,
	RackPhysicalProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.outpostsSite.OutpostsSiteRackPhysicalProperties,
	ShippingAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.outpostsSite.OutpostsSiteShippingAddress,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes">Notes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress">OperatingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties">RackPhysicalProperties</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress">ShippingAddress</a></code> | <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#name OutpostsSite#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#description OutpostsSite#description}.

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#notes OutpostsSite#notes}.

---

##### `OperatingAddress`<sup>Optional</sup> <a name="OperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.operatingAddress"></a>

```go
OperatingAddress OutpostsSiteOperatingAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress">OutpostsSiteOperatingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#operating_address OutpostsSite#operating_address}.

---

##### `RackPhysicalProperties`<sup>Optional</sup> <a name="RackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.rackPhysicalProperties"></a>

```go
RackPhysicalProperties OutpostsSiteRackPhysicalProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties">OutpostsSiteRackPhysicalProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#rack_physical_properties OutpostsSite#rack_physical_properties}.

---

##### `ShippingAddress`<sup>Optional</sup> <a name="ShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.shippingAddress"></a>

```go
ShippingAddress OutpostsSiteShippingAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress">OutpostsSiteShippingAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#shipping_address OutpostsSite#shipping_address}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#tags OutpostsSite#tags}.

---

### OutpostsSiteOperatingAddress <a name="OutpostsSiteOperatingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

&outpostssite.OutpostsSiteOperatingAddress {
	AddressLine1: *string,
	AddressLine2: *string,
	AddressLine3: *string,
	City: *string,
	ContactName: *string,
	ContactPhoneNumber: *string,
	CountryCode: *string,
	DistrictOrCounty: *string,
	Municipality: *string,
	PostalCode: *string,
	StateOrRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName">ContactName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality">Municipality</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.addressLine3"></a>

```go
AddressLine3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactName"></a>

```go
ContactName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `ContactPhoneNumber`<sup>Optional</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.contactPhoneNumber"></a>

```go
ContactPhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.districtOrCounty"></a>

```go
DistrictOrCounty *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `Municipality`<sup>Optional</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.municipality"></a>

```go
Municipality *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddress.property.stateOrRegion"></a>

```go
StateOrRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteRackPhysicalProperties <a name="OutpostsSiteRackPhysicalProperties" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

&outpostssite.OutpostsSiteRackPhysicalProperties {
	FiberOpticCableType: *string,
	MaximumSupportedWeightLbs: *string,
	OpticalStandard: *string,
	PowerConnector: *string,
	PowerDrawKva: *string,
	PowerFeedDrop: *string,
	PowerPhase: *string,
	UplinkCount: *string,
	UplinkGbps: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType">FiberOpticCableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs">MaximumSupportedWeightLbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard">OpticalStandard</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector">PowerConnector</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva">PowerDrawKva</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop">PowerFeedDrop</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase">PowerPhase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount">UplinkCount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps">UplinkGbps</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}. |

---

##### `FiberOpticCableType`<sup>Optional</sup> <a name="FiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.fiberOpticCableType"></a>

```go
FiberOpticCableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#fiber_optic_cable_type OutpostsSite#fiber_optic_cable_type}.

---

##### `MaximumSupportedWeightLbs`<sup>Optional</sup> <a name="MaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.maximumSupportedWeightLbs"></a>

```go
MaximumSupportedWeightLbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#maximum_supported_weight_lbs OutpostsSite#maximum_supported_weight_lbs}.

---

##### `OpticalStandard`<sup>Optional</sup> <a name="OpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.opticalStandard"></a>

```go
OpticalStandard *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#optical_standard OutpostsSite#optical_standard}.

---

##### `PowerConnector`<sup>Optional</sup> <a name="PowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerConnector"></a>

```go
PowerConnector *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_connector OutpostsSite#power_connector}.

---

##### `PowerDrawKva`<sup>Optional</sup> <a name="PowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerDrawKva"></a>

```go
PowerDrawKva *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_draw_kva OutpostsSite#power_draw_kva}.

---

##### `PowerFeedDrop`<sup>Optional</sup> <a name="PowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerFeedDrop"></a>

```go
PowerFeedDrop *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_feed_drop OutpostsSite#power_feed_drop}.

---

##### `PowerPhase`<sup>Optional</sup> <a name="PowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.powerPhase"></a>

```go
PowerPhase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#power_phase OutpostsSite#power_phase}.

---

##### `UplinkCount`<sup>Optional</sup> <a name="UplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkCount"></a>

```go
UplinkCount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_count OutpostsSite#uplink_count}.

---

##### `UplinkGbps`<sup>Optional</sup> <a name="UplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalProperties.property.uplinkGbps"></a>

```go
UplinkGbps *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#uplink_gbps OutpostsSite#uplink_gbps}.

---

### OutpostsSiteShippingAddress <a name="OutpostsSiteShippingAddress" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

&outpostssite.OutpostsSiteShippingAddress {
	AddressLine1: *string,
	AddressLine2: *string,
	AddressLine3: *string,
	City: *string,
	ContactName: *string,
	ContactPhoneNumber: *string,
	CountryCode: *string,
	DistrictOrCounty: *string,
	Municipality: *string,
	PostalCode: *string,
	StateOrRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city">City</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName">ContactName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality">Municipality</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}. |

---

##### `AddressLine1`<sup>Optional</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine1"></a>

```go
AddressLine1 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_1 OutpostsSite#address_line_1}.

---

##### `AddressLine2`<sup>Optional</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine2"></a>

```go
AddressLine2 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_2 OutpostsSite#address_line_2}.

---

##### `AddressLine3`<sup>Optional</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.addressLine3"></a>

```go
AddressLine3 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#address_line_3 OutpostsSite#address_line_3}.

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.city"></a>

```go
City *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#city OutpostsSite#city}.

---

##### `ContactName`<sup>Optional</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactName"></a>

```go
ContactName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_name OutpostsSite#contact_name}.

---

##### `ContactPhoneNumber`<sup>Optional</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.contactPhoneNumber"></a>

```go
ContactPhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#contact_phone_number OutpostsSite#contact_phone_number}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#country_code OutpostsSite#country_code}.

---

##### `DistrictOrCounty`<sup>Optional</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.districtOrCounty"></a>

```go
DistrictOrCounty *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#district_or_county OutpostsSite#district_or_county}.

---

##### `Municipality`<sup>Optional</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.municipality"></a>

```go
Municipality *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#municipality OutpostsSite#municipality}.

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#postal_code OutpostsSite#postal_code}.

---

##### `StateOrRegion`<sup>Optional</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddress.property.stateOrRegion"></a>

```go
StateOrRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#state_or_region OutpostsSite#state_or_region}.

---

### OutpostsSiteTags <a name="OutpostsSiteTags" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

&outpostssite.OutpostsSiteTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#key OutpostsSite#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/outposts_site#value OutpostsSite#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OutpostsSiteOperatingAddressOutputReference <a name="OutpostsSiteOperatingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSiteOperatingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OutpostsSiteOperatingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName">ResetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber">ResetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality">ResetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetAddressLine3"></a>

```go
func ResetAddressLine3()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactName"></a>

```go
func ResetContactName()
```

##### `ResetContactPhoneNumber` <a name="ResetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetContactPhoneNumber"></a>

```go
func ResetContactPhoneNumber()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetDistrictOrCounty"></a>

```go
func ResetDistrictOrCounty()
```

##### `ResetMunicipality` <a name="ResetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetMunicipality"></a>

```go
func ResetMunicipality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.resetStateOrRegion"></a>

```go
func ResetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input">AddressLine3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput">ContactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput">ContactPhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput">MunicipalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName">ContactName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality">Municipality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3Input"></a>

```go
func AddressLine3Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactNameInput"></a>

```go
func ContactNameInput() *string
```

- *Type:* *string

---

##### `ContactPhoneNumberInput`<sup>Optional</sup> <a name="ContactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumberInput"></a>

```go
func ContactPhoneNumberInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCountyInput"></a>

```go
func DistrictOrCountyInput() *string
```

- *Type:* *string

---

##### `MunicipalityInput`<sup>Optional</sup> <a name="MunicipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipalityInput"></a>

```go
func MunicipalityInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegionInput"></a>

```go
func StateOrRegionInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.addressLine3"></a>

```go
func AddressLine3() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactName"></a>

```go
func ContactName() *string
```

- *Type:* *string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.contactPhoneNumber"></a>

```go
func ContactPhoneNumber() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.districtOrCounty"></a>

```go
func DistrictOrCounty() *string
```

- *Type:* *string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.municipality"></a>

```go
func Municipality() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.stateOrRegion"></a>

```go
func StateOrRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteOperatingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsSiteRackPhysicalPropertiesOutputReference <a name="OutpostsSiteRackPhysicalPropertiesOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSiteRackPhysicalPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OutpostsSiteRackPhysicalPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType">ResetFiberOpticCableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs">ResetMaximumSupportedWeightLbs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard">ResetOpticalStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector">ResetPowerConnector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva">ResetPowerDrawKva</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop">ResetPowerFeedDrop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase">ResetPowerPhase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount">ResetUplinkCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps">ResetUplinkGbps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFiberOpticCableType` <a name="ResetFiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetFiberOpticCableType"></a>

```go
func ResetFiberOpticCableType()
```

##### `ResetMaximumSupportedWeightLbs` <a name="ResetMaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetMaximumSupportedWeightLbs"></a>

```go
func ResetMaximumSupportedWeightLbs()
```

##### `ResetOpticalStandard` <a name="ResetOpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetOpticalStandard"></a>

```go
func ResetOpticalStandard()
```

##### `ResetPowerConnector` <a name="ResetPowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerConnector"></a>

```go
func ResetPowerConnector()
```

##### `ResetPowerDrawKva` <a name="ResetPowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerDrawKva"></a>

```go
func ResetPowerDrawKva()
```

##### `ResetPowerFeedDrop` <a name="ResetPowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerFeedDrop"></a>

```go
func ResetPowerFeedDrop()
```

##### `ResetPowerPhase` <a name="ResetPowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetPowerPhase"></a>

```go
func ResetPowerPhase()
```

##### `ResetUplinkCount` <a name="ResetUplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkCount"></a>

```go
func ResetUplinkCount()
```

##### `ResetUplinkGbps` <a name="ResetUplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.resetUplinkGbps"></a>

```go
func ResetUplinkGbps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput">FiberOpticCableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput">MaximumSupportedWeightLbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput">OpticalStandardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput">PowerConnectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput">PowerDrawKvaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput">PowerFeedDropInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput">PowerPhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput">UplinkCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput">UplinkGbpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType">FiberOpticCableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs">MaximumSupportedWeightLbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard">OpticalStandard</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector">PowerConnector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva">PowerDrawKva</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop">PowerFeedDrop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase">PowerPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount">UplinkCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps">UplinkGbps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FiberOpticCableTypeInput`<sup>Optional</sup> <a name="FiberOpticCableTypeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableTypeInput"></a>

```go
func FiberOpticCableTypeInput() *string
```

- *Type:* *string

---

##### `MaximumSupportedWeightLbsInput`<sup>Optional</sup> <a name="MaximumSupportedWeightLbsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbsInput"></a>

```go
func MaximumSupportedWeightLbsInput() *string
```

- *Type:* *string

---

##### `OpticalStandardInput`<sup>Optional</sup> <a name="OpticalStandardInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandardInput"></a>

```go
func OpticalStandardInput() *string
```

- *Type:* *string

---

##### `PowerConnectorInput`<sup>Optional</sup> <a name="PowerConnectorInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnectorInput"></a>

```go
func PowerConnectorInput() *string
```

- *Type:* *string

---

##### `PowerDrawKvaInput`<sup>Optional</sup> <a name="PowerDrawKvaInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKvaInput"></a>

```go
func PowerDrawKvaInput() *string
```

- *Type:* *string

---

##### `PowerFeedDropInput`<sup>Optional</sup> <a name="PowerFeedDropInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDropInput"></a>

```go
func PowerFeedDropInput() *string
```

- *Type:* *string

---

##### `PowerPhaseInput`<sup>Optional</sup> <a name="PowerPhaseInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhaseInput"></a>

```go
func PowerPhaseInput() *string
```

- *Type:* *string

---

##### `UplinkCountInput`<sup>Optional</sup> <a name="UplinkCountInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCountInput"></a>

```go
func UplinkCountInput() *string
```

- *Type:* *string

---

##### `UplinkGbpsInput`<sup>Optional</sup> <a name="UplinkGbpsInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbpsInput"></a>

```go
func UplinkGbpsInput() *string
```

- *Type:* *string

---

##### `FiberOpticCableType`<sup>Required</sup> <a name="FiberOpticCableType" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.fiberOpticCableType"></a>

```go
func FiberOpticCableType() *string
```

- *Type:* *string

---

##### `MaximumSupportedWeightLbs`<sup>Required</sup> <a name="MaximumSupportedWeightLbs" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.maximumSupportedWeightLbs"></a>

```go
func MaximumSupportedWeightLbs() *string
```

- *Type:* *string

---

##### `OpticalStandard`<sup>Required</sup> <a name="OpticalStandard" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.opticalStandard"></a>

```go
func OpticalStandard() *string
```

- *Type:* *string

---

##### `PowerConnector`<sup>Required</sup> <a name="PowerConnector" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerConnector"></a>

```go
func PowerConnector() *string
```

- *Type:* *string

---

##### `PowerDrawKva`<sup>Required</sup> <a name="PowerDrawKva" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerDrawKva"></a>

```go
func PowerDrawKva() *string
```

- *Type:* *string

---

##### `PowerFeedDrop`<sup>Required</sup> <a name="PowerFeedDrop" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerFeedDrop"></a>

```go
func PowerFeedDrop() *string
```

- *Type:* *string

---

##### `PowerPhase`<sup>Required</sup> <a name="PowerPhase" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.powerPhase"></a>

```go
func PowerPhase() *string
```

- *Type:* *string

---

##### `UplinkCount`<sup>Required</sup> <a name="UplinkCount" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkCount"></a>

```go
func UplinkCount() *string
```

- *Type:* *string

---

##### `UplinkGbps`<sup>Required</sup> <a name="UplinkGbps" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.uplinkGbps"></a>

```go
func UplinkGbps() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteRackPhysicalPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsSiteShippingAddressOutputReference <a name="OutpostsSiteShippingAddressOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSiteShippingAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OutpostsSiteShippingAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1">ResetAddressLine1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2">ResetAddressLine2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3">ResetAddressLine3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName">ResetContactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber">ResetContactPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty">ResetDistrictOrCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality">ResetMunicipality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion">ResetStateOrRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLine1` <a name="ResetAddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine1"></a>

```go
func ResetAddressLine1()
```

##### `ResetAddressLine2` <a name="ResetAddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine2"></a>

```go
func ResetAddressLine2()
```

##### `ResetAddressLine3` <a name="ResetAddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetAddressLine3"></a>

```go
func ResetAddressLine3()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetContactName` <a name="ResetContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactName"></a>

```go
func ResetContactName()
```

##### `ResetContactPhoneNumber` <a name="ResetContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetContactPhoneNumber"></a>

```go
func ResetContactPhoneNumber()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetDistrictOrCounty` <a name="ResetDistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetDistrictOrCounty"></a>

```go
func ResetDistrictOrCounty()
```

##### `ResetMunicipality` <a name="ResetMunicipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetMunicipality"></a>

```go
func ResetMunicipality()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetStateOrRegion` <a name="ResetStateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.resetStateOrRegion"></a>

```go
func ResetStateOrRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input">AddressLine1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input">AddressLine2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input">AddressLine3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput">ContactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput">ContactPhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput">DistrictOrCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput">MunicipalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput">StateOrRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1">AddressLine1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2">AddressLine2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3">AddressLine3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName">ContactName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber">ContactPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty">DistrictOrCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality">Municipality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion">StateOrRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLine1Input`<sup>Optional</sup> <a name="AddressLine1Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1Input"></a>

```go
func AddressLine1Input() *string
```

- *Type:* *string

---

##### `AddressLine2Input`<sup>Optional</sup> <a name="AddressLine2Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2Input"></a>

```go
func AddressLine2Input() *string
```

- *Type:* *string

---

##### `AddressLine3Input`<sup>Optional</sup> <a name="AddressLine3Input" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3Input"></a>

```go
func AddressLine3Input() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `ContactNameInput`<sup>Optional</sup> <a name="ContactNameInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactNameInput"></a>

```go
func ContactNameInput() *string
```

- *Type:* *string

---

##### `ContactPhoneNumberInput`<sup>Optional</sup> <a name="ContactPhoneNumberInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumberInput"></a>

```go
func ContactPhoneNumberInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `DistrictOrCountyInput`<sup>Optional</sup> <a name="DistrictOrCountyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCountyInput"></a>

```go
func DistrictOrCountyInput() *string
```

- *Type:* *string

---

##### `MunicipalityInput`<sup>Optional</sup> <a name="MunicipalityInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipalityInput"></a>

```go
func MunicipalityInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `StateOrRegionInput`<sup>Optional</sup> <a name="StateOrRegionInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegionInput"></a>

```go
func StateOrRegionInput() *string
```

- *Type:* *string

---

##### `AddressLine1`<sup>Required</sup> <a name="AddressLine1" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine1"></a>

```go
func AddressLine1() *string
```

- *Type:* *string

---

##### `AddressLine2`<sup>Required</sup> <a name="AddressLine2" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine2"></a>

```go
func AddressLine2() *string
```

- *Type:* *string

---

##### `AddressLine3`<sup>Required</sup> <a name="AddressLine3" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.addressLine3"></a>

```go
func AddressLine3() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `ContactName`<sup>Required</sup> <a name="ContactName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactName"></a>

```go
func ContactName() *string
```

- *Type:* *string

---

##### `ContactPhoneNumber`<sup>Required</sup> <a name="ContactPhoneNumber" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.contactPhoneNumber"></a>

```go
func ContactPhoneNumber() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `DistrictOrCounty`<sup>Required</sup> <a name="DistrictOrCounty" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.districtOrCounty"></a>

```go
func DistrictOrCounty() *string
```

- *Type:* *string

---

##### `Municipality`<sup>Required</sup> <a name="Municipality" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.municipality"></a>

```go
func Municipality() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `StateOrRegion`<sup>Required</sup> <a name="StateOrRegion" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.stateOrRegion"></a>

```go
func StateOrRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteShippingAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsSiteTagsList <a name="OutpostsSiteTagsList" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSiteTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OutpostsSiteTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get"></a>

```go
func Get(index *f64) OutpostsSiteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OutpostsSiteTagsOutputReference <a name="OutpostsSiteTagsOutputReference" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/outpostssite"

outpostssite.NewOutpostsSiteTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OutpostsSiteTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.outpostsSite.OutpostsSiteTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



