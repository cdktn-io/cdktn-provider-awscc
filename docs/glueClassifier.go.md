# `glueClassifier` Submodule <a name="`glueClassifier` Submodule" id="@cdktn/provider-awscc.glueClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueClassifier <a name="GlueClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier awscc_glue_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.NewGlueClassifier(scope Construct, id *string, config GlueClassifierConfig) GlueClassifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig">GlueClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier">PutCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier">PutGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier">PutJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier">PutXmlClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier">ResetCsvClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier">ResetGrokClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier">ResetJsonClassifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier">ResetXmlClassifier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsvClassifier` <a name="PutCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier"></a>

```go
func PutCsvClassifier(value GlueClassifierCsvClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putCsvClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

---

##### `PutGrokClassifier` <a name="PutGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier"></a>

```go
func PutGrokClassifier(value GlueClassifierGrokClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putGrokClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

---

##### `PutJsonClassifier` <a name="PutJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier"></a>

```go
func PutJsonClassifier(value GlueClassifierJsonClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putJsonClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

---

##### `PutXmlClassifier` <a name="PutXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier"></a>

```go
func PutXmlClassifier(value GlueClassifierXmlClassifier)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.putXmlClassifier.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

---

##### `ResetCsvClassifier` <a name="ResetCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetCsvClassifier"></a>

```go
func ResetCsvClassifier()
```

##### `ResetGrokClassifier` <a name="ResetGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetGrokClassifier"></a>

```go
func ResetGrokClassifier()
```

##### `ResetJsonClassifier` <a name="ResetJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetJsonClassifier"></a>

```go
func ResetJsonClassifier()
```

##### `ResetXmlClassifier` <a name="ResetXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.resetXmlClassifier"></a>

```go
func ResetXmlClassifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.GlueClassifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.GlueClassifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.GlueClassifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.GlueClassifier_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueClassifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput">CsvClassifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput">GrokClassifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput">JsonClassifierInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput">XmlClassifierInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvClassifier`<sup>Required</sup> <a name="CsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifier"></a>

```go
func CsvClassifier() GlueClassifierCsvClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference">GlueClassifierCsvClassifierOutputReference</a>

---

##### `GrokClassifier`<sup>Required</sup> <a name="GrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifier"></a>

```go
func GrokClassifier() GlueClassifierGrokClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference">GlueClassifierGrokClassifierOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JsonClassifier`<sup>Required</sup> <a name="JsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifier"></a>

```go
func JsonClassifier() GlueClassifierJsonClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference">GlueClassifierJsonClassifierOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `XmlClassifier`<sup>Required</sup> <a name="XmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifier"></a>

```go
func XmlClassifier() GlueClassifierXmlClassifierOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference">GlueClassifierXmlClassifierOutputReference</a>

---

##### `CsvClassifierInput`<sup>Optional</sup> <a name="CsvClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.csvClassifierInput"></a>

```go
func CsvClassifierInput() interface{}
```

- *Type:* interface{}

---

##### `GrokClassifierInput`<sup>Optional</sup> <a name="GrokClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.grokClassifierInput"></a>

```go
func GrokClassifierInput() interface{}
```

- *Type:* interface{}

---

##### `JsonClassifierInput`<sup>Optional</sup> <a name="JsonClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.jsonClassifierInput"></a>

```go
func JsonClassifierInput() interface{}
```

- *Type:* interface{}

---

##### `XmlClassifierInput`<sup>Optional</sup> <a name="XmlClassifierInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.xmlClassifierInput"></a>

```go
func XmlClassifierInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueClassifier.GlueClassifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueClassifierConfig <a name="GlueClassifierConfig" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

&glueclassifier.GlueClassifierConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CsvClassifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueClassifier.GlueClassifierCsvClassifier,
	GrokClassifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueClassifier.GlueClassifierGrokClassifier,
	JsonClassifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueClassifier.GlueClassifierJsonClassifier,
	XmlClassifier: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueClassifier.GlueClassifierXmlClassifier,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier">CsvClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a></code> | A classifier for comma-separated values (CSV). |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier">GrokClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a></code> | A classifier that uses grok. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier">JsonClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a></code> | A classifier for JSON content. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier">XmlClassifier</a></code> | <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a></code> | A classifier for XML content. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CsvClassifier`<sup>Optional</sup> <a name="CsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.csvClassifier"></a>

```go
CsvClassifier GlueClassifierCsvClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier">GlueClassifierCsvClassifier</a>

A classifier for comma-separated values (CSV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}

---

##### `GrokClassifier`<sup>Optional</sup> <a name="GrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.grokClassifier"></a>

```go
GrokClassifier GlueClassifierGrokClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier">GlueClassifierGrokClassifier</a>

A classifier that uses grok.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}

---

##### `JsonClassifier`<sup>Optional</sup> <a name="JsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.jsonClassifier"></a>

```go
JsonClassifier GlueClassifierJsonClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier">GlueClassifierJsonClassifier</a>

A classifier for JSON content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}

---

##### `XmlClassifier`<sup>Optional</sup> <a name="XmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierConfig.property.xmlClassifier"></a>

```go
XmlClassifier GlueClassifierXmlClassifier
```

- *Type:* <a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier">GlueClassifierXmlClassifier</a>

A classifier for XML content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}

---

### GlueClassifierCsvClassifier <a name="GlueClassifierCsvClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

&glueclassifier.GlueClassifierCsvClassifier {
	AllowSingleColumn: interface{},
	ContainsCustomDatatype: *[]*string,
	ContainsHeader: *string,
	CustomDatatypeConfigured: interface{},
	Delimiter: *string,
	DisableValueTrimming: interface{},
	Header: *[]*string,
	Name: *string,
	QuoteSymbol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>interface{}</code> | Enables the processing of files that contain only one column. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype">ContainsCustomDatatype</a></code> | <code>*[]*string</code> | Indicates whether the CSV file contains custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader">ContainsHeader</a></code> | <code>*string</code> | Indicates whether the CSV file contains a header. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>interface{}</code> | Enables the configuration of custom data types. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter">Delimiter</a></code> | <code>*string</code> | A custom symbol to denote what separates each column entry in the row. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>interface{}</code> | Specifies not to trim values before identifying the type of column values. The default value is true. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header">Header</a></code> | <code>*[]*string</code> | A list of strings representing column names. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name">Name</a></code> | <code>*string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | A custom symbol to denote what combines content into a single column value. |

---

##### `AllowSingleColumn`<sup>Optional</sup> <a name="AllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.allowSingleColumn"></a>

```go
AllowSingleColumn interface{}
```

- *Type:* interface{}

Enables the processing of files that contain only one column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}

---

##### `ContainsCustomDatatype`<sup>Optional</sup> <a name="ContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsCustomDatatype"></a>

```go
ContainsCustomDatatype *[]*string
```

- *Type:* *[]*string

Indicates whether the CSV file contains custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#contains_custom_datatype GlueClassifier#contains_custom_datatype}

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.containsHeader"></a>

```go
ContainsHeader *string
```

- *Type:* *string

Indicates whether the CSV file contains a header.

A value of UNKNOWN specifies that the classifier will detect whether the CSV file contains headings. A value of PRESENT specifies that the CSV file contains headings. A value of ABSENT specifies that the CSV file does not contain headings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}

---

##### `CustomDatatypeConfigured`<sup>Optional</sup> <a name="CustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.customDatatypeConfigured"></a>

```go
CustomDatatypeConfigured interface{}
```

- *Type:* interface{}

Enables the configuration of custom data types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

A custom symbol to denote what separates each column entry in the row.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}

---

##### `DisableValueTrimming`<sup>Optional</sup> <a name="DisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.disableValueTrimming"></a>

```go
DisableValueTrimming interface{}
```

- *Type:* interface{}

Specifies not to trim values before identifying the type of column values. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.header"></a>

```go
Header *[]*string
```

- *Type:* *[]*string

A list of strings representing column names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#header GlueClassifier#header}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `QuoteSymbol`<sup>Optional</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifier.property.quoteSymbol"></a>

```go
QuoteSymbol *string
```

- *Type:* *string

A custom symbol to denote what combines content into a single column value.

It must be different from the column delimiter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}

---

### GlueClassifierGrokClassifier <a name="GlueClassifierGrokClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

&glueclassifier.GlueClassifierGrokClassifier {
	Classification: *string,
	CustomPatterns: *string,
	GrokPattern: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification">Classification</a></code> | <code>*string</code> | An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns">CustomPatterns</a></code> | <code>*string</code> | Optional custom grok patterns defined by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern">GrokPattern</a></code> | <code>*string</code> | The grok pattern applied to a data store by this classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name">Name</a></code> | <code>*string</code> | The name of the classifier. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and so on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `CustomPatterns`<sup>Optional</sup> <a name="CustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.customPatterns"></a>

```go
CustomPatterns *string
```

- *Type:* *string

Optional custom grok patterns defined by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}

---

##### `GrokPattern`<sup>Optional</sup> <a name="GrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.grokPattern"></a>

```go
GrokPattern *string
```

- *Type:* *string

The grok pattern applied to a data store by this classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierJsonClassifier <a name="GlueClassifierJsonClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

&glueclassifier.GlueClassifierJsonClassifier {
	JsonPath: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath">JsonPath</a></code> | <code>*string</code> | A JsonPath string defining the JSON data for the classifier to classify. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name">Name</a></code> | <code>*string</code> | The name of the classifier. |

---

##### `JsonPath`<sup>Optional</sup> <a name="JsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

A JsonPath string defining the JSON data for the classifier to classify.

AWS Glue supports a subset of JsonPath, as described in Writing JsonPath Custom Classifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

### GlueClassifierXmlClassifier <a name="GlueClassifierXmlClassifier" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

&glueclassifier.GlueClassifierXmlClassifier {
	Classification: *string,
	Name: *string,
	RowTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification">Classification</a></code> | <code>*string</code> | An identifier of the data format that the classifier matches. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name">Name</a></code> | <code>*string</code> | The name of the classifier. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag">RowTag</a></code> | <code>*string</code> | The XML tag designating the element that contains each record in an XML document being parsed. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.classification"></a>

```go
Classification *string
```

- *Type:* *string

An identifier of the data format that the classifier matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#classification GlueClassifier#classification}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the classifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#name GlueClassifier#name}

---

##### `RowTag`<sup>Optional</sup> <a name="RowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifier.property.rowTag"></a>

```go
RowTag *string
```

- *Type:* *string

The XML tag designating the element that contains each record in an XML document being parsed.

This can't identify a self-closing element (closed by />). An empty row element that contains only attributes can be parsed as long as it ends with a closing tag (for example, <row item_a="A" item_b="B"></row> is okay, but <row item_a="A" item_b="B" /> is not).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueClassifierCsvClassifierOutputReference <a name="GlueClassifierCsvClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.NewGlueClassifierCsvClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierCsvClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn">ResetAllowSingleColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype">ResetContainsCustomDatatype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured">ResetCustomDatatypeConfigured</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming">ResetDisableValueTrimming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol">ResetQuoteSymbol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowSingleColumn` <a name="ResetAllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetAllowSingleColumn"></a>

```go
func ResetAllowSingleColumn()
```

##### `ResetContainsCustomDatatype` <a name="ResetContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsCustomDatatype"></a>

```go
func ResetContainsCustomDatatype()
```

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetContainsHeader"></a>

```go
func ResetContainsHeader()
```

##### `ResetCustomDatatypeConfigured` <a name="ResetCustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetCustomDatatypeConfigured"></a>

```go
func ResetCustomDatatypeConfigured()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetDisableValueTrimming` <a name="ResetDisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetDisableValueTrimming"></a>

```go
func ResetDisableValueTrimming()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetQuoteSymbol` <a name="ResetQuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.resetQuoteSymbol"></a>

```go
func ResetQuoteSymbol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput">AllowSingleColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput">ContainsCustomDatatypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput">CustomDatatypeConfiguredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput">DisableValueTrimmingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput">HeaderInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput">QuoteSymbolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn">AllowSingleColumn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype">ContainsCustomDatatype</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured">CustomDatatypeConfigured</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming">DisableValueTrimming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header">Header</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol">QuoteSymbol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowSingleColumnInput`<sup>Optional</sup> <a name="AllowSingleColumnInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumnInput"></a>

```go
func AllowSingleColumnInput() interface{}
```

- *Type:* interface{}

---

##### `ContainsCustomDatatypeInput`<sup>Optional</sup> <a name="ContainsCustomDatatypeInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatypeInput"></a>

```go
func ContainsCustomDatatypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeaderInput"></a>

```go
func ContainsHeaderInput() *string
```

- *Type:* *string

---

##### `CustomDatatypeConfiguredInput`<sup>Optional</sup> <a name="CustomDatatypeConfiguredInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfiguredInput"></a>

```go
func CustomDatatypeConfiguredInput() interface{}
```

- *Type:* interface{}

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `DisableValueTrimmingInput`<sup>Optional</sup> <a name="DisableValueTrimmingInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimmingInput"></a>

```go
func DisableValueTrimmingInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.headerInput"></a>

```go
func HeaderInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuoteSymbolInput`<sup>Optional</sup> <a name="QuoteSymbolInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbolInput"></a>

```go
func QuoteSymbolInput() *string
```

- *Type:* *string

---

##### `AllowSingleColumn`<sup>Required</sup> <a name="AllowSingleColumn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.allowSingleColumn"></a>

```go
func AllowSingleColumn() interface{}
```

- *Type:* interface{}

---

##### `ContainsCustomDatatype`<sup>Required</sup> <a name="ContainsCustomDatatype" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsCustomDatatype"></a>

```go
func ContainsCustomDatatype() *[]*string
```

- *Type:* *[]*string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.containsHeader"></a>

```go
func ContainsHeader() *string
```

- *Type:* *string

---

##### `CustomDatatypeConfigured`<sup>Required</sup> <a name="CustomDatatypeConfigured" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.customDatatypeConfigured"></a>

```go
func CustomDatatypeConfigured() interface{}
```

- *Type:* interface{}

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `DisableValueTrimming`<sup>Required</sup> <a name="DisableValueTrimming" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.disableValueTrimming"></a>

```go
func DisableValueTrimming() interface{}
```

- *Type:* interface{}

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.header"></a>

```go
func Header() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QuoteSymbol`<sup>Required</sup> <a name="QuoteSymbol" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.quoteSymbol"></a>

```go
func QuoteSymbol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierCsvClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueClassifierGrokClassifierOutputReference <a name="GlueClassifierGrokClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.NewGlueClassifierGrokClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierGrokClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns">ResetCustomPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern">ResetGrokPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetCustomPatterns` <a name="ResetCustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetCustomPatterns"></a>

```go
func ResetCustomPatterns()
```

##### `ResetGrokPattern` <a name="ResetGrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetGrokPattern"></a>

```go
func ResetGrokPattern()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput">CustomPatternsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput">GrokPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns">CustomPatterns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern">GrokPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `CustomPatternsInput`<sup>Optional</sup> <a name="CustomPatternsInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatternsInput"></a>

```go
func CustomPatternsInput() *string
```

- *Type:* *string

---

##### `GrokPatternInput`<sup>Optional</sup> <a name="GrokPatternInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPatternInput"></a>

```go
func GrokPatternInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `CustomPatterns`<sup>Required</sup> <a name="CustomPatterns" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.customPatterns"></a>

```go
func CustomPatterns() *string
```

- *Type:* *string

---

##### `GrokPattern`<sup>Required</sup> <a name="GrokPattern" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.grokPattern"></a>

```go
func GrokPattern() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierGrokClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueClassifierJsonClassifierOutputReference <a name="GlueClassifierJsonClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.NewGlueClassifierJsonClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierJsonClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath">ResetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetJsonPath` <a name="ResetJsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetJsonPath"></a>

```go
func ResetJsonPath()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierJsonClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueClassifierXmlClassifierOutputReference <a name="GlueClassifierXmlClassifierOutputReference" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueclassifier"

glueclassifier.NewGlueClassifierXmlClassifierOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueClassifierXmlClassifierOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag">ResetRowTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetClassification"></a>

```go
func ResetClassification()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRowTag` <a name="ResetRowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.resetRowTag"></a>

```go
func ResetRowTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput">RowTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification">Classification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag">RowTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classificationInput"></a>

```go
func ClassificationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RowTagInput`<sup>Optional</sup> <a name="RowTagInput" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTagInput"></a>

```go
func RowTagInput() *string
```

- *Type:* *string

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.classification"></a>

```go
func Classification() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RowTag`<sup>Required</sup> <a name="RowTag" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.rowTag"></a>

```go
func RowTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueClassifier.GlueClassifierXmlClassifierOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



