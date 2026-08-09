# `elementalinferenceDictionary` Submodule <a name="`elementalinferenceDictionary` Submodule" id="@cdktn/provider-awscc.elementalinferenceDictionary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceDictionary <a name="ElementalinferenceDictionary" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary awscc_elementalinference_dictionary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

elementalinferencedictionary.NewElementalinferenceDictionary(scope Construct, id *string, config ElementalinferenceDictionaryConfig) ElementalinferenceDictionary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries">ResetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEntries` <a name="ResetEntries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries"></a>

```go
func ResetEntries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

elementalinferencedictionary.ElementalinferenceDictionary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

elementalinferencedictionary.ElementalinferenceDictionary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

elementalinferencedictionary.ElementalinferenceDictionary_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

elementalinferencedictionary.ElementalinferenceDictionary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElementalinferenceDictionary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElementalinferenceDictionary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceDictionary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId">DictionaryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput">EntriesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries">Entries</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DictionaryId`<sup>Required</sup> <a name="DictionaryId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId"></a>

```go
func DictionaryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput"></a>

```go
func EntriesInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries"></a>

```go
func Entries() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceDictionaryConfig <a name="ElementalinferenceDictionaryConfig" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elementalinferencedictionary"

&elementalinferencedictionary.ElementalinferenceDictionaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Language: *string,
	Name: *string,
	Entries: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language">Language</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries">Entries</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}.

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries"></a>

```go
Entries *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}.

---



