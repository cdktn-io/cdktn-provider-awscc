# `cloudwatchOtelEnrichment` Submodule <a name="`cloudwatchOtelEnrichment` Submodule" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchOtelEnrichment <a name="CloudwatchOtelEnrichment" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment awscc_cloudwatch_otel_enrichment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.NewCloudwatchOtelEnrichment(scope Construct, id *string, config CloudwatchOtelEnrichmentConfig) CloudwatchOtelEnrichment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters">PutExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters">PutIncludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilters">ResetExcludeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilters">ResetIncludeFilters</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExcludeFilters` <a name="PutExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters"></a>

```go
func PutExcludeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIncludeFilters` <a name="PutIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters"></a>

```go
func PutIncludeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExcludeFilters` <a name="ResetExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilters"></a>

```go
func ResetExcludeFilters()
```

##### `ResetIncludeFilters` <a name="ResetIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilters"></a>

```go
func ResetIncludeFilters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.CloudwatchOtelEnrichment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.CloudwatchOtelEnrichment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.CloudwatchOtelEnrichment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.CloudwatchOtelEnrichment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudwatchOtelEnrichment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudwatchOtelEnrichment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilters">ExcludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList">CloudwatchOtelEnrichmentExcludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilters">IncludeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList">CloudwatchOtelEnrichmentIncludeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFiltersInput">ExcludeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFiltersInput">IncludeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ExcludeFilters`<sup>Required</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilters"></a>

```go
func ExcludeFilters() CloudwatchOtelEnrichmentExcludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList">CloudwatchOtelEnrichmentExcludeFiltersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeFilters`<sup>Required</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilters"></a>

```go
func IncludeFilters() CloudwatchOtelEnrichmentIncludeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList">CloudwatchOtelEnrichmentIncludeFiltersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ExcludeFiltersInput`<sup>Optional</sup> <a name="ExcludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFiltersInput"></a>

```go
func ExcludeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeFiltersInput`<sup>Optional</sup> <a name="IncludeFiltersInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFiltersInput"></a>

```go
func IncludeFiltersInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchOtelEnrichmentConfig <a name="CloudwatchOtelEnrichmentConfig" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

&cloudwatchotelenrichment.CloudwatchOtelEnrichmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludeFilters: interface{},
	IncludeFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilters">ExcludeFilters</a></code> | <code>interface{}</code> | Removes metrics from the include set. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilters">IncludeFilters</a></code> | <code>interface{}</code> | Scopes enrichment to a subset of the account's telemetry. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludeFilters`<sup>Optional</sup> <a name="ExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilters"></a>

```go
ExcludeFilters interface{}
```

- *Type:* interface{}

Removes metrics from the include set.

Absent or empty means nothing is removed. Evaluated after IncludeFilters, so ExcludeFilters always wins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#exclude_filters CloudwatchOtelEnrichment#exclude_filters}

---

##### `IncludeFilters`<sup>Optional</sup> <a name="IncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilters"></a>

```go
IncludeFilters interface{}
```

- *Type:* interface{}

Scopes enrichment to a subset of the account's telemetry.

Absent or empty means all namespaces are in scope. Present means only these are. The service enforces a combined cap of 100 selectors across IncludeFilters and ExcludeFilters, and rejects more than one selector for the same namespace within a direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#include_filters CloudwatchOtelEnrichment#include_filters}

---

### CloudwatchOtelEnrichmentExcludeFilters <a name="CloudwatchOtelEnrichmentExcludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

&cloudwatchotelenrichment.CloudwatchOtelEnrichmentExcludeFilters {
	MetricNames: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | Absent or empty means every metric in this namespace, in whichever direction this selector appears. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.namespace">Namespace</a></code> | <code>*string</code> | The CloudWatch namespace this selector applies to. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.metricNames"></a>

```go
MetricNames *[]*string
```

- *Type:* *[]*string

Absent or empty means every metric in this namespace, in whichever direction this selector appears.

Present means only these metric names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilters.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The CloudWatch namespace this selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}

---

### CloudwatchOtelEnrichmentIncludeFilters <a name="CloudwatchOtelEnrichmentIncludeFilters" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

&cloudwatchotelenrichment.CloudwatchOtelEnrichmentIncludeFilters {
	MetricNames: *[]*string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | Absent or empty means every metric in this namespace, in whichever direction this selector appears. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.namespace">Namespace</a></code> | <code>*string</code> | The CloudWatch namespace this selector applies to. |

---

##### `MetricNames`<sup>Optional</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.metricNames"></a>

```go
MetricNames *[]*string
```

- *Type:* *[]*string

Absent or empty means every metric in this namespace, in whichever direction this selector appears.

Present means only these metric names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilters.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The CloudWatch namespace this selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchOtelEnrichmentExcludeFiltersList <a name="CloudwatchOtelEnrichmentExcludeFiltersList" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.NewCloudwatchOtelEnrichmentExcludeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchOtelEnrichmentExcludeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get"></a>

```go
func Get(index *f64) CloudwatchOtelEnrichmentExcludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchOtelEnrichmentExcludeFiltersOutputReference <a name="CloudwatchOtelEnrichmentExcludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.NewCloudwatchOtelEnrichmentExcludeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchOtelEnrichmentExcludeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetMetricNames"></a>

```go
func ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNamesInput"></a>

```go
func MetricNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.metricNames"></a>

```go
func MetricNames() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchOtelEnrichmentIncludeFiltersList <a name="CloudwatchOtelEnrichmentIncludeFiltersList" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.NewCloudwatchOtelEnrichmentIncludeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CloudwatchOtelEnrichmentIncludeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get"></a>

```go
func Get(index *f64) CloudwatchOtelEnrichmentIncludeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CloudwatchOtelEnrichmentIncludeFiltersOutputReference <a name="CloudwatchOtelEnrichmentIncludeFiltersOutputReference" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/cloudwatchotelenrichment"

cloudwatchotelenrichment.NewCloudwatchOtelEnrichmentIncludeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CloudwatchOtelEnrichmentIncludeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetMetricNames">ResetMetricNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricNames` <a name="ResetMetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetMetricNames"></a>

```go
func ResetMetricNames()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNamesInput">MetricNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames">MetricNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricNamesInput`<sup>Optional</sup> <a name="MetricNamesInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNamesInput"></a>

```go
func MetricNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricNames`<sup>Required</sup> <a name="MetricNames" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.metricNames"></a>

```go
func MetricNames() *[]*string
```

- *Type:* *[]*string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



