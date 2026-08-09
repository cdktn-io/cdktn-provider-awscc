# `connectDataTableAttribute` Submodule <a name="`connectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.connectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableAttribute <a name="ConnectDataTableAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.NewConnectDataTableAttribute(scope Construct, id *string, config ConnectDataTableAttributeConfig) ConnectDataTableAttribute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig">ConnectDataTableAttributeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation">PutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary">ResetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValidation` <a name="PutValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation"></a>

```go
func PutValidation(value ConnectDataTableAttributeValidation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetPrimary` <a name="ResetPrimary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary"></a>

```go
func ResetPrimary()
```

##### `ResetValidation` <a name="ResetValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation"></a>

```go
func ResetValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.ConnectDataTableAttribute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.ConnectDataTableAttribute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.ConnectDataTableAttribute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.ConnectDataTableAttribute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectDataTableAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId">AttributeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion">LastModifiedRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion">LockVersion</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput">DataTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput">PrimaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput">ValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn">DataTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary">Primary</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId"></a>

```go
func AttributeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedRegion`<sup>Required</sup> <a name="LastModifiedRegion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion"></a>

```go
func LastModifiedRegion() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `LockVersion`<sup>Required</sup> <a name="LockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion"></a>

```go
func LockVersion() ConnectDataTableAttributeLockVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation"></a>

```go
func Validation() ConnectDataTableAttributeValidationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a>

---

##### `DataTableArnInput`<sup>Optional</sup> <a name="DataTableArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput"></a>

```go
func DataTableArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput"></a>

```go
func PrimaryInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput"></a>

```go
func ValidationInput() interface{}
```

- *Type:* interface{}

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn"></a>

```go
func DataTableArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary"></a>

```go
func Primary() interface{}
```

- *Type:* interface{}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableAttributeConfig <a name="ConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

&connectdatatableattribute.ConnectDataTableAttributeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataTableArn: *string,
	InstanceArn: *string,
	Name: *string,
	ValueType: *string,
	Description: *string,
	Primary: interface{},
	Validation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn">DataTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType">ValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary">Primary</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation">Validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn"></a>

```go
DataTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `Primary`<sup>Optional</sup> <a name="Primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary"></a>

```go
Primary interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation"></a>

```go
Validation ConnectDataTableAttributeValidation
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

### ConnectDataTableAttributeLockVersion <a name="ConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

&connectdatatableattribute.ConnectDataTableAttributeLockVersion {

}
```


### ConnectDataTableAttributeValidation <a name="ConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

&connectdatatableattribute.ConnectDataTableAttributeValidation {
	Enum: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum,
	ExclusiveMaximum: *f64,
	ExclusiveMinimum: *f64,
	Maximum: *f64,
	MaxLength: *f64,
	MaxValues: *f64,
	Minimum: *f64,
	MinLength: *f64,
	MinValues: *f64,
	MultipleOf: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum">Enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum">ExclusiveMaximum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum">ExclusiveMinimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum">Maximum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues">MaxValues</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum">Minimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength">MinLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues">MinValues</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf">MultipleOf</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}. |

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum"></a>

```go
Enum ConnectDataTableAttributeValidationEnum
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

##### `ExclusiveMaximum`<sup>Optional</sup> <a name="ExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum"></a>

```go
ExclusiveMaximum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

##### `ExclusiveMinimum`<sup>Optional</sup> <a name="ExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum"></a>

```go
ExclusiveMinimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

##### `MaxValues`<sup>Optional</sup> <a name="MaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues"></a>

```go
MaxValues *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

##### `MinValues`<sup>Optional</sup> <a name="MinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues"></a>

```go
MinValues *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

##### `MultipleOf`<sup>Optional</sup> <a name="MultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf"></a>

```go
MultipleOf *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

### ConnectDataTableAttributeValidationEnum <a name="ConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

&connectdatatableattribute.ConnectDataTableAttributeValidationEnum {
	Strict: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict">Strict</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}. |

---

##### `Strict`<sup>Optional</sup> <a name="Strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict"></a>

```go
Strict interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableAttributeLockVersionOutputReference <a name="ConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.NewConnectDataTableAttributeLockVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectDataTableAttributeLockVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable">DataTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `DataTable`<sup>Required</sup> <a name="DataTable" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```go
func DataTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() ConnectDataTableAttributeLockVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a>

---


### ConnectDataTableAttributeValidationEnumOutputReference <a name="ConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.NewConnectDataTableAttributeValidationEnumOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectDataTableAttributeValidationEnumOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict">ResetStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStrict` <a name="ResetStrict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict"></a>

```go
func ResetStrict()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput">StrictInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict">Strict</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StrictInput`<sup>Optional</sup> <a name="StrictInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput"></a>

```go
func StrictInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Strict`<sup>Required</sup> <a name="Strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```go
func Strict() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectDataTableAttributeValidationOutputReference <a name="ConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatableattribute"

connectdatatableattribute.NewConnectDataTableAttributeValidationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectDataTableAttributeValidationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum">PutEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum">ResetExclusiveMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum">ResetExclusiveMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues">ResetMaxValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues">ResetMinValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf">ResetMultipleOf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnum` <a name="PutEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum"></a>

```go
func PutEnum(value ConnectDataTableAttributeValidationEnum)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetExclusiveMaximum` <a name="ResetExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum"></a>

```go
func ResetExclusiveMaximum()
```

##### `ResetExclusiveMinimum` <a name="ResetExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum"></a>

```go
func ResetExclusiveMinimum()
```

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMaxValues` <a name="ResetMaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues"></a>

```go
func ResetMaxValues()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetMinValues` <a name="ResetMinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues"></a>

```go
func ResetMinValues()
```

##### `ResetMultipleOf` <a name="ResetMultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf"></a>

```go
func ResetMultipleOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum">Enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput">EnumInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput">ExclusiveMaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput">ExclusiveMinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput">MaxValuesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput">MinValuesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput">MultipleOfInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">ExclusiveMaximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">ExclusiveMinimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues">MaxValues</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues">MinValues</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf">MultipleOf</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```go
func Enum() ConnectDataTableAttributeValidationEnumOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput"></a>

```go
func EnumInput() interface{}
```

- *Type:* interface{}

---

##### `ExclusiveMaximumInput`<sup>Optional</sup> <a name="ExclusiveMaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput"></a>

```go
func ExclusiveMaximumInput() *f64
```

- *Type:* *f64

---

##### `ExclusiveMinimumInput`<sup>Optional</sup> <a name="ExclusiveMinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput"></a>

```go
func ExclusiveMinimumInput() *f64
```

- *Type:* *f64

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MaxValuesInput`<sup>Optional</sup> <a name="MaxValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput"></a>

```go
func MaxValuesInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `MinValuesInput`<sup>Optional</sup> <a name="MinValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput"></a>

```go
func MinValuesInput() *f64
```

- *Type:* *f64

---

##### `MultipleOfInput`<sup>Optional</sup> <a name="MultipleOfInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput"></a>

```go
func MultipleOfInput() *f64
```

- *Type:* *f64

---

##### `ExclusiveMaximum`<sup>Required</sup> <a name="ExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```go
func ExclusiveMaximum() *f64
```

- *Type:* *f64

---

##### `ExclusiveMinimum`<sup>Required</sup> <a name="ExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```go
func ExclusiveMinimum() *f64
```

- *Type:* *f64

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MaxValues`<sup>Required</sup> <a name="MaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```go
func MaxValues() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `MinValues`<sup>Required</sup> <a name="MinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```go
func MinValues() *f64
```

- *Type:* *f64

---

##### `MultipleOf`<sup>Required</sup> <a name="MultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```go
func MultipleOf() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



