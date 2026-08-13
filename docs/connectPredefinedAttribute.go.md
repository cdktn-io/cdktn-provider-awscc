# `connectPredefinedAttribute` Submodule <a name="`connectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.connectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPredefinedAttribute <a name="ConnectPredefinedAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.NewConnectPredefinedAttribute(scope Construct, id *string, config ConnectPredefinedAttributeConfig) ConnectPredefinedAttribute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig">ConnectPredefinedAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration">PutAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration">ResetAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes">ResetPurposes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeConfiguration` <a name="PutAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration"></a>

```go
func PutAttributeConfiguration(value ConnectPredefinedAttributeAttributeConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues"></a>

```go
func PutValues(value ConnectPredefinedAttributeValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `ResetAttributeConfiguration` <a name="ResetAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration"></a>

```go
func ResetAttributeConfiguration()
```

##### `ResetPurposes` <a name="ResetPurposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes"></a>

```go
func ResetPurposes()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues"></a>

```go
func ResetValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.ConnectPredefinedAttribute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.ConnectPredefinedAttribute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.ConnectPredefinedAttribute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.ConnectPredefinedAttribute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectPredefinedAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration">AttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput">AttributeConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput">PurposesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes">Purposes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeConfiguration`<sup>Required</sup> <a name="AttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration"></a>

```go
func AttributeConfiguration() ConnectPredefinedAttributeAttributeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```go
func LastModifiedRegion() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values"></a>

```go
func Values() ConnectPredefinedAttributeValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a>

---

##### `AttributeConfigurationInput`<sup>Optional</sup> <a name="AttributeConfigurationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput"></a>

```go
func AttributeConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PurposesInput`<sup>Optional</sup> <a name="PurposesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput"></a>

```go
func PurposesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Purposes`<sup>Required</sup> <a name="Purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes"></a>

```go
func Purposes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPredefinedAttributeAttributeConfiguration <a name="ConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

&connectpredefinedattribute.ConnectPredefinedAttributeAttributeConfiguration {
	EnableValueValidationOnAssociation: interface{},
	IsReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation">EnableValueValidationOnAssociation</a></code> | <code>interface{}</code> | Enables customers to enforce strict validation on the specific values that this predefined attribute can hold. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | Allows the predefined attribute to show up and be managed in the Amazon Connect UI. |

---

##### `EnableValueValidationOnAssociation`<sup>Optional</sup> <a name="EnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation"></a>

```go
EnableValueValidationOnAssociation interface{}
```

- *Type:* interface{}

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly"></a>

```go
IsReadOnly interface{}
```

- *Type:* interface{}

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

### ConnectPredefinedAttributeConfig <a name="ConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

&connectpredefinedattribute.ConnectPredefinedAttributeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	Name: *string,
	AttributeConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration,
	Purposes: *[]*string,
	Values: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration">AttributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes">Purposes</a></code> | <code>*[]*string</code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `AttributeConfiguration`<sup>Optional</sup> <a name="AttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration"></a>

```go
AttributeConfiguration ConnectPredefinedAttributeAttributeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `Purposes`<sup>Optional</sup> <a name="Purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes"></a>

```go
Purposes *[]*string
```

- *Type:* *[]*string

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values"></a>

```go
Values ConnectPredefinedAttributeValues
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

### ConnectPredefinedAttributeValues <a name="ConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

&connectpredefinedattribute.ConnectPredefinedAttributeValues {
	StringList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList">StringList</a></code> | <code>*[]*string</code> | Predefined attribute values of type string list. |

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList"></a>

```go
StringList *[]*string
```

- *Type:* *[]*string

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="ConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.NewConnectPredefinedAttributeAttributeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectPredefinedAttributeAttributeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation">ResetEnableValueValidationOnAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableValueValidationOnAssociation` <a name="ResetEnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation"></a>

```go
func ResetEnableValueValidationOnAssociation()
```

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly"></a>

```go
func ResetIsReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput">EnableValueValidationOnAssociationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">EnableValueValidationOnAssociation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableValueValidationOnAssociationInput`<sup>Optional</sup> <a name="EnableValueValidationOnAssociationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput"></a>

```go
func EnableValueValidationOnAssociationInput() interface{}
```

- *Type:* interface{}

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput"></a>

```go
func IsReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `EnableValueValidationOnAssociation`<sup>Required</sup> <a name="EnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```go
func EnableValueValidationOnAssociation() interface{}
```

- *Type:* interface{}

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectPredefinedAttributeValuesOutputReference <a name="ConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectpredefinedattribute"

connectpredefinedattribute.NewConnectPredefinedAttributeValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectPredefinedAttributeValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStringList` <a name="ResetStringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList"></a>

```go
func ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput">StringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList">StringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput"></a>

```go
func StringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```go
func StringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



