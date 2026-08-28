# `configConformancePack` Submodule <a name="`configConformancePack` Submodule" id="@cdktn/provider-awscc.configConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigConformancePack <a name="ConfigConformancePack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack awscc_config_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePack(scope Construct, id *string, config ConfigConformancePackConfig) ConfigConformancePack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig">ConfigConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters">PutConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails">PutTemplateSsmDocumentDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters">ResetConformancePackInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket">ResetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix">ResetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody">ResetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri">ResetTemplateS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails">ResetTemplateSsmDocumentDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConformancePackInputParameters` <a name="PutConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters"></a>

```go
func PutConformancePackInputParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putConformancePackInputParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTemplateSsmDocumentDetails` <a name="PutTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails"></a>

```go
func PutTemplateSsmDocumentDetails(value ConfigConformancePackTemplateSsmDocumentDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.putTemplateSsmDocumentDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

---

##### `ResetConformancePackInputParameters` <a name="ResetConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetConformancePackInputParameters"></a>

```go
func ResetConformancePackInputParameters()
```

##### `ResetDeliveryS3Bucket` <a name="ResetDeliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3Bucket"></a>

```go
func ResetDeliveryS3Bucket()
```

##### `ResetDeliveryS3KeyPrefix` <a name="ResetDeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetDeliveryS3KeyPrefix"></a>

```go
func ResetDeliveryS3KeyPrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateBody` <a name="ResetTemplateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateBody"></a>

```go
func ResetTemplateBody()
```

##### `ResetTemplateS3Uri` <a name="ResetTemplateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateS3Uri"></a>

```go
func ResetTemplateS3Uri()
```

##### `ResetTemplateSsmDocumentDetails` <a name="ResetTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.resetTemplateSsmDocumentDetails"></a>

```go
func ResetTemplateSsmDocumentDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.ConfigConformancePack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.ConfigConformancePack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.ConfigConformancePack_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.ConfigConformancePack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigConformancePack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigConformancePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigConformancePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigConformancePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn">ConformancePackArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters">ConformancePackInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails">TemplateSsmDocumentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput">ConformancePackInputParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput">ConformancePackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput">DeliveryS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput">DeliveryS3KeyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput">TemplateBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput">TemplateS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput">TemplateSsmDocumentDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName">ConformancePackName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody">TemplateBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri">TemplateS3Uri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConformancePackArn`<sup>Required</sup> <a name="ConformancePackArn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackArn"></a>

```go
func ConformancePackArn() *string
```

- *Type:* *string

---

##### `ConformancePackInputParameters`<sup>Required</sup> <a name="ConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParameters"></a>

```go
func ConformancePackInputParameters() ConfigConformancePackConformancePackInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList">ConfigConformancePackConformancePackInputParametersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tags"></a>

```go
func Tags() ConfigConformancePackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList">ConfigConformancePackTagsList</a>

---

##### `TemplateSsmDocumentDetails`<sup>Required</sup> <a name="TemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetails"></a>

```go
func TemplateSsmDocumentDetails() ConfigConformancePackTemplateSsmDocumentDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference">ConfigConformancePackTemplateSsmDocumentDetailsOutputReference</a>

---

##### `ConformancePackInputParametersInput`<sup>Optional</sup> <a name="ConformancePackInputParametersInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackInputParametersInput"></a>

```go
func ConformancePackInputParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ConformancePackNameInput`<sup>Optional</sup> <a name="ConformancePackNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackNameInput"></a>

```go
func ConformancePackNameInput() *string
```

- *Type:* *string

---

##### `DeliveryS3BucketInput`<sup>Optional</sup> <a name="DeliveryS3BucketInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3BucketInput"></a>

```go
func DeliveryS3BucketInput() *string
```

- *Type:* *string

---

##### `DeliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="DeliveryS3KeyPrefixInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefixInput"></a>

```go
func DeliveryS3KeyPrefixInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateBodyInput`<sup>Optional</sup> <a name="TemplateBodyInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBodyInput"></a>

```go
func TemplateBodyInput() *string
```

- *Type:* *string

---

##### `TemplateS3UriInput`<sup>Optional</sup> <a name="TemplateS3UriInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3UriInput"></a>

```go
func TemplateS3UriInput() *string
```

- *Type:* *string

---

##### `TemplateSsmDocumentDetailsInput`<sup>Optional</sup> <a name="TemplateSsmDocumentDetailsInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateSsmDocumentDetailsInput"></a>

```go
func TemplateSsmDocumentDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `ConformancePackName`<sup>Required</sup> <a name="ConformancePackName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.conformancePackName"></a>

```go
func ConformancePackName() *string
```

- *Type:* *string

---

##### `DeliveryS3Bucket`<sup>Required</sup> <a name="DeliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3Bucket"></a>

```go
func DeliveryS3Bucket() *string
```

- *Type:* *string

---

##### `DeliveryS3KeyPrefix`<sup>Required</sup> <a name="DeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.deliveryS3KeyPrefix"></a>

```go
func DeliveryS3KeyPrefix() *string
```

- *Type:* *string

---

##### `TemplateBody`<sup>Required</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateBody"></a>

```go
func TemplateBody() *string
```

- *Type:* *string

---

##### `TemplateS3Uri`<sup>Required</sup> <a name="TemplateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.templateS3Uri"></a>

```go
func TemplateS3Uri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigConformancePackConfig <a name="ConfigConformancePackConfig" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

&configconformancepack.ConfigConformancePackConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConformancePackName: *string,
	ConformancePackInputParameters: interface{},
	DeliveryS3Bucket: *string,
	DeliveryS3KeyPrefix: *string,
	Tags: interface{},
	TemplateBody: *string,
	TemplateS3Uri: *string,
	TemplateSsmDocumentDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName">ConformancePackName</a></code> | <code>*string</code> | Name of the conformance pack which will be assigned as the unique identifier. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters">ConformancePackInputParameters</a></code> | <code>interface{}</code> | A list of ConformancePackInputParameter objects. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket">DeliveryS3Bucket</a></code> | <code>*string</code> | AWS Config stores intermediate files while processing conformance pack template. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix">DeliveryS3KeyPrefix</a></code> | <code>*string</code> | The prefix for delivery S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the conformance pack. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody">TemplateBody</a></code> | <code>*string</code> | A string containing full conformance pack template body. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri">TemplateS3Uri</a></code> | <code>*string</code> | Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails">TemplateSsmDocumentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a></code> | The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConformancePackName`<sup>Required</sup> <a name="ConformancePackName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackName"></a>

```go
ConformancePackName *string
```

- *Type:* *string

Name of the conformance pack which will be assigned as the unique identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#conformance_pack_name ConfigConformancePack#conformance_pack_name}

---

##### `ConformancePackInputParameters`<sup>Optional</sup> <a name="ConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.conformancePackInputParameters"></a>

```go
ConformancePackInputParameters interface{}
```

- *Type:* interface{}

A list of ConformancePackInputParameter objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#conformance_pack_input_parameters ConfigConformancePack#conformance_pack_input_parameters}

---

##### `DeliveryS3Bucket`<sup>Optional</sup> <a name="DeliveryS3Bucket" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3Bucket"></a>

```go
DeliveryS3Bucket *string
```

- *Type:* *string

AWS Config stores intermediate files while processing conformance pack template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}

---

##### `DeliveryS3KeyPrefix`<sup>Optional</sup> <a name="DeliveryS3KeyPrefix" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```go
DeliveryS3KeyPrefix *string
```

- *Type:* *string

The prefix for delivery S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the conformance pack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#tags ConfigConformancePack#tags}

---

##### `TemplateBody`<sup>Optional</sup> <a name="TemplateBody" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateBody"></a>

```go
TemplateBody *string
```

- *Type:* *string

A string containing full conformance pack template body.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#template_body ConfigConformancePack#template_body}

---

##### `TemplateS3Uri`<sup>Optional</sup> <a name="TemplateS3Uri" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateS3Uri"></a>

```go
TemplateS3Uri *string
```

- *Type:* *string

Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket.

You can only specify one of the template body or template S3Uri fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#template_s3_uri ConfigConformancePack#template_s3_uri}

---

##### `TemplateSsmDocumentDetails`<sup>Optional</sup> <a name="TemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConfig.property.templateSsmDocumentDetails"></a>

```go
TemplateSsmDocumentDetails ConfigConformancePackTemplateSsmDocumentDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails">ConfigConformancePackTemplateSsmDocumentDetails</a>

The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#template_ssm_document_details ConfigConformancePack#template_ssm_document_details}

---

### ConfigConformancePackConformancePackInputParameters <a name="ConfigConformancePackConformancePackInputParameters" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

&configconformancepack.ConfigConformancePackConformancePackInputParameters {
	ParameterName: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Key part of key-value pair with value being parameter value. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | Value part of key-value pair with key being parameter Name. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Key part of key-value pair with value being parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#parameter_name ConfigConformancePack#parameter_name}

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParameters.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

Value part of key-value pair with key being parameter Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#parameter_value ConfigConformancePack#parameter_value}

---

### ConfigConformancePackTags <a name="ConfigConformancePackTags" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

&configconformancepack.ConfigConformancePackTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#key ConfigConformancePack#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#value ConfigConformancePack#value}

---

### ConfigConformancePackTemplateSsmDocumentDetails <a name="ConfigConformancePackTemplateSsmDocumentDetails" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

&configconformancepack.ConfigConformancePackTemplateSsmDocumentDetails {
	DocumentName: *string,
	DocumentVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName">DocumentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}. |

---

##### `DocumentName`<sup>Optional</sup> <a name="DocumentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentName"></a>

```go
DocumentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#document_name ConfigConformancePack#document_name}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetails.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/config_conformance_pack#document_version ConfigConformancePack#document_version}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigConformancePackConformancePackInputParametersList <a name="ConfigConformancePackConformancePackInputParametersList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePackConformancePackInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConformancePackConformancePackInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get"></a>

```go
func Get(index *f64) ConfigConformancePackConformancePackInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConformancePackConformancePackInputParametersOutputReference <a name="ConfigConformancePackConformancePackInputParametersOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePackConformancePackInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConformancePackConformancePackInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterName"></a>

```go
func ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackConformancePackInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConformancePackTagsList <a name="ConfigConformancePackTagsList" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePackTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConfigConformancePackTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get"></a>

```go
func Get(index *f64) ConfigConformancePackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConformancePackTagsOutputReference <a name="ConfigConformancePackTagsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePackTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConfigConformancePackTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigConformancePackTemplateSsmDocumentDetailsOutputReference <a name="ConfigConformancePackTemplateSsmDocumentDetailsOutputReference" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configconformancepack"

configconformancepack.NewConfigConformancePackTemplateSsmDocumentDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigConformancePackTemplateSsmDocumentDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName">ResetDocumentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentName` <a name="ResetDocumentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentName"></a>

```go
func ResetDocumentName()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput">DocumentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName">DocumentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentNameInput`<sup>Optional</sup> <a name="DocumentNameInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentNameInput"></a>

```go
func DocumentNameInput() *string
```

- *Type:* *string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentName"></a>

```go
func DocumentName() *string
```

- *Type:* *string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configConformancePack.ConfigConformancePackTemplateSsmDocumentDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



