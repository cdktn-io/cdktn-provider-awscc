# `casesLayout` Submodule <a name="`casesLayout` Submodule" id="@cdktn/provider-awscc.casesLayout"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesLayout <a name="CasesLayout" id="@cdktn/provider-awscc.casesLayout.CasesLayout"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout awscc_cases_layout}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayout(scope Construct, id *string, config CasesLayoutConfig) CasesLayout
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig">CasesLayoutConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.casesLayout.CasesLayout.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig">CasesLayoutConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.casesLayout.CasesLayout.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.casesLayout.CasesLayout.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.casesLayout.CasesLayout.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayout.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent"></a>

```go
func PutContent(value CasesLayoutContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayout.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetDomainId"></a>

```go
func ResetDomainId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.CasesLayout_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.CasesLayout_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.CasesLayout_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.casesLayout.CasesLayout.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.CasesLayout_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CasesLayout resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CasesLayout to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CasesLayout that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CasesLayout to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn">LayoutArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId">LayoutId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.content"></a>

```go
func Content() CasesLayoutContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference">CasesLayoutContentOutputReference</a>

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `LayoutArn`<sup>Required</sup> <a name="LayoutArn" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutArn"></a>

```go
func LayoutArn() *string
```

- *Type:* *string

---

##### `LayoutId`<sup>Required</sup> <a name="LayoutId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.layoutId"></a>

```go
func LayoutId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tags"></a>

```go
func Tags() CasesLayoutTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList">CasesLayoutTagsList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.casesLayout.CasesLayout.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CasesLayoutConfig <a name="CasesLayoutConfig" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Content: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContent,
	Name: *string,
	DomainId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a></code> | Defines the layout structure and field organization for the case interface. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name">Name</a></code> | <code>*string</code> | A descriptive name for the layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId">DomainId</a></code> | <code>*string</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags that you attach to this layout. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.content"></a>

```go
Content CasesLayoutContent
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent">CasesLayoutContent</a>

Defines the layout structure and field organization for the case interface.

Specifies which fields appear in the top panel and More Info tab, and their display order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#content CasesLayout#content}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A descriptive name for the layout.

Must be unique within the Cases domain and should clearly indicate the layout's purpose and field organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#domain_id CasesLayout#domain_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags that you attach to this layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#tags CasesLayout#tags}

---

### CasesLayoutContent <a name="CasesLayoutContent" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContent {
	Basic: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContentBasic,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic">Basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a></code> | Defines the field layout for the agent's case interface. |

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContent.property.basic"></a>

```go
Basic CasesLayoutContentBasic
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

Defines the field layout for the agent's case interface.

Configures which fields appear in the top panel (immediately visible) and More Info tab (expandable section) of the case view, allowing customization of the agent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#basic CasesLayout#basic}

---

### CasesLayoutContentBasic <a name="CasesLayoutContentBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasic {
	MoreInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContentBasicMoreInfo,
	TopPanel: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContentBasicTopPanel,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo">MoreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a></code> | Sections within a panel or tab of the page layout. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel">TopPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a></code> | Sections within a panel or tab of the page layout. |

---

##### `MoreInfo`<sup>Optional</sup> <a name="MoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.moreInfo"></a>

```go
MoreInfo CasesLayoutContentBasicMoreInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#more_info CasesLayout#more_info}

---

##### `TopPanel`<sup>Optional</sup> <a name="TopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic.property.topPanel"></a>

```go
TopPanel CasesLayoutContentBasicTopPanel
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

Sections within a panel or tab of the page layout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#top_panel CasesLayout#top_panel}

---

### CasesLayoutContentBasicMoreInfo <a name="CasesLayoutContentBasicMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicMoreInfo {
	Sections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections">Sections</a></code> | <code>interface{}</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `Sections`<sup>Optional</sup> <a name="Sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo.property.sections"></a>

```go
Sections interface{}
```

- *Type:* interface{}

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicMoreInfoSections <a name="CasesLayoutContentBasicMoreInfoSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicMoreInfoSections {
	FieldGroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup">FieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `FieldGroup`<sup>Optional</sup> <a name="FieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSections.property.fieldGroup"></a>

```go
FieldGroup CasesLayoutContentBasicMoreInfoSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroup <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup {
	Fields: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields">Fields</a></code> | <code>interface{}</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name">Name</a></code> | <code>*string</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id">Id</a></code> | <code>*string</code> | The unique identifier of a field. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFields.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutContentBasicTopPanel <a name="CasesLayoutContentBasicTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicTopPanel {
	Sections: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections">Sections</a></code> | <code>interface{}</code> | Defines the sections within a panel or tab. Contains field groups that organize related fields together. |

---

##### `Sections`<sup>Optional</sup> <a name="Sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel.property.sections"></a>

```go
Sections interface{}
```

- *Type:* interface{}

Defines the sections within a panel or tab. Contains field groups that organize related fields together.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#sections CasesLayout#sections}

---

### CasesLayoutContentBasicTopPanelSections <a name="CasesLayoutContentBasicTopPanelSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicTopPanelSections {
	FieldGroup: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup">FieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a></code> | Consists of a group of fields and associated properties. |

---

##### `FieldGroup`<sup>Optional</sup> <a name="FieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSections.property.fieldGroup"></a>

```go
FieldGroup CasesLayoutContentBasicTopPanelSectionsFieldGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

Consists of a group of fields and associated properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#field_group CasesLayout#field_group}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroup <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup {
	Fields: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields">Fields</a></code> | <code>interface{}</code> | An ordered list of fields to display in this group. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name">Name</a></code> | <code>*string</code> | A descriptive name for the field group. Helps organize related fields together in the layout interface. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

An ordered list of fields to display in this group.

The order determines the sequence in which fields appear in the agent interface. Each field is referenced by its unique field ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#fields CasesLayout#fields}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup.property.name"></a>

```go
Name *string
```

- *Type:* *string

A descriptive name for the field group. Helps organize related fields together in the layout interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#name CasesLayout#name}

---

### CasesLayoutContentBasicTopPanelSectionsFieldGroupFields <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields {
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id">Id</a></code> | <code>*string</code> | The unique identifier of a field. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFields.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of a field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#id CasesLayout#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CasesLayoutTags <a name="CasesLayoutTags" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

&caseslayout.CasesLayoutTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#key CasesLayout#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cases_layout#value CasesLayout#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesLayoutContentBasicMoreInfoOutputReference <a name="CasesLayoutContentBasicMoreInfoOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentBasicMoreInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections">PutSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections">ResetSections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSections` <a name="PutSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections"></a>

```go
func PutSections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.putSections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSections` <a name="ResetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.resetSections"></a>

```go
func ResetSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections">Sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput">SectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sections`<sup>Required</sup> <a name="Sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sections"></a>

```go
func Sections() CasesLayoutContentBasicMoreInfoSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList">CasesLayoutContentBasicMoreInfoSectionsList</a>

---

##### `SectionsInput`<sup>Optional</sup> <a name="SectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.sectionsInput"></a>

```go
func SectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get"></a>

```go
func Get(index *f64) CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fields"></a>

```go
func Fields() CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList">CasesLayoutContentBasicMoreInfoSectionsFieldGroupFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicMoreInfoSectionsList <a name="CasesLayoutContentBasicMoreInfoSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoSectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CasesLayoutContentBasicMoreInfoSectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get"></a>

```go
func Get(index *f64) CasesLayoutContentBasicMoreInfoSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicMoreInfoSectionsOutputReference <a name="CasesLayoutContentBasicMoreInfoSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicMoreInfoSectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CasesLayoutContentBasicMoreInfoSectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup">PutFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup">ResetFieldGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldGroup` <a name="PutFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup"></a>

```go
func PutFieldGroup(value CasesLayoutContentBasicMoreInfoSectionsFieldGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroup">CasesLayoutContentBasicMoreInfoSectionsFieldGroup</a>

---

##### `ResetFieldGroup` <a name="ResetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.resetFieldGroup"></a>

```go
func ResetFieldGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup">FieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput">FieldGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldGroup`<sup>Required</sup> <a name="FieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroup"></a>

```go
func FieldGroup() CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference">CasesLayoutContentBasicMoreInfoSectionsFieldGroupOutputReference</a>

---

##### `FieldGroupInput`<sup>Optional</sup> <a name="FieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.fieldGroupInput"></a>

```go
func FieldGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoSectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicOutputReference <a name="CasesLayoutContentBasicOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentBasicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo">PutMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel">PutTopPanel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo">ResetMoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel">ResetTopPanel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMoreInfo` <a name="PutMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo"></a>

```go
func PutMoreInfo(value CasesLayoutContentBasicMoreInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putMoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfo">CasesLayoutContentBasicMoreInfo</a>

---

##### `PutTopPanel` <a name="PutTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel"></a>

```go
func PutTopPanel(value CasesLayoutContentBasicTopPanel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.putTopPanel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanel">CasesLayoutContentBasicTopPanel</a>

---

##### `ResetMoreInfo` <a name="ResetMoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetMoreInfo"></a>

```go
func ResetMoreInfo()
```

##### `ResetTopPanel` <a name="ResetTopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.resetTopPanel"></a>

```go
func ResetTopPanel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo">MoreInfo</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel">TopPanel</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput">MoreInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput">TopPanelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MoreInfo`<sup>Required</sup> <a name="MoreInfo" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfo"></a>

```go
func MoreInfo() CasesLayoutContentBasicMoreInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicMoreInfoOutputReference">CasesLayoutContentBasicMoreInfoOutputReference</a>

---

##### `TopPanel`<sup>Required</sup> <a name="TopPanel" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanel"></a>

```go
func TopPanel() CasesLayoutContentBasicTopPanelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference">CasesLayoutContentBasicTopPanelOutputReference</a>

---

##### `MoreInfoInput`<sup>Optional</sup> <a name="MoreInfoInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.moreInfoInput"></a>

```go
func MoreInfoInput() interface{}
```

- *Type:* interface{}

---

##### `TopPanelInput`<sup>Optional</sup> <a name="TopPanelInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.topPanelInput"></a>

```go
func TopPanelInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelOutputReference <a name="CasesLayoutContentBasicTopPanelOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentBasicTopPanelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections">PutSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections">ResetSections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSections` <a name="PutSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections"></a>

```go
func PutSections(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.putSections.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSections` <a name="ResetSections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.resetSections"></a>

```go
func ResetSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections">Sections</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput">SectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sections`<sup>Required</sup> <a name="Sections" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sections"></a>

```go
func Sections() CasesLayoutContentBasicTopPanelSectionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList">CasesLayoutContentBasicTopPanelSectionsList</a>

---

##### `SectionsInput`<sup>Optional</sup> <a name="SectionsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.sectionsInput"></a>

```go
func SectionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get"></a>

```go
func Get(index *f64) CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fields"></a>

```go
func Fields() CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList">CasesLayoutContentBasicTopPanelSectionsFieldGroupFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelSectionsList <a name="CasesLayoutContentBasicTopPanelSectionsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelSectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CasesLayoutContentBasicTopPanelSectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get"></a>

```go
func Get(index *f64) CasesLayoutContentBasicTopPanelSectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentBasicTopPanelSectionsOutputReference <a name="CasesLayoutContentBasicTopPanelSectionsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentBasicTopPanelSectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CasesLayoutContentBasicTopPanelSectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup">PutFieldGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup">ResetFieldGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldGroup` <a name="PutFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup"></a>

```go
func PutFieldGroup(value CasesLayoutContentBasicTopPanelSectionsFieldGroup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.putFieldGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroup">CasesLayoutContentBasicTopPanelSectionsFieldGroup</a>

---

##### `ResetFieldGroup` <a name="ResetFieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.resetFieldGroup"></a>

```go
func ResetFieldGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup">FieldGroup</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput">FieldGroupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldGroup`<sup>Required</sup> <a name="FieldGroup" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroup"></a>

```go
func FieldGroup() CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference">CasesLayoutContentBasicTopPanelSectionsFieldGroupOutputReference</a>

---

##### `FieldGroupInput`<sup>Optional</sup> <a name="FieldGroupInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.fieldGroupInput"></a>

```go
func FieldGroupInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicTopPanelSectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutContentOutputReference <a name="CasesLayoutContentOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CasesLayoutContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasic` <a name="PutBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic"></a>

```go
func PutBasic(value CasesLayoutContentBasic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasic">CasesLayoutContentBasic</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.resetBasic"></a>

```go
func ResetBasic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput">BasicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basic"></a>

```go
func Basic() CasesLayoutContentBasicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutContentBasicOutputReference">CasesLayoutContentBasicOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.basicInput"></a>

```go
func BasicInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutTagsList <a name="CasesLayoutTagsList" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CasesLayoutTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get"></a>

```go
func Get(index *f64) CasesLayoutTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CasesLayoutTagsOutputReference <a name="CasesLayoutTagsOutputReference" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/caseslayout"

caseslayout.NewCasesLayoutTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CasesLayoutTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesLayout.CasesLayoutTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



