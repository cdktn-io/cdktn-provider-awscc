# `athenaWorkGroup` Submodule <a name="`athenaWorkGroup` Submodule" id="@cdktn/provider-awscc.athenaWorkGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaWorkGroup <a name="AthenaWorkGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group awscc_athena_work_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroup(scope Construct, id *string, config AthenaWorkGroupConfig) AthenaWorkGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig">AthenaWorkGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig">AthenaWorkGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration">PutWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates">PutWorkGroupConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption">ResetRecursiveDeleteOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration">ResetWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates">ResetWorkGroupConfigurationUpdates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkGroupConfiguration` <a name="PutWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration"></a>

```go
func PutWorkGroupConfiguration(value AthenaWorkGroupWorkGroupConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

---

##### `PutWorkGroupConfigurationUpdates` <a name="PutWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates"></a>

```go
func PutWorkGroupConfigurationUpdates(value AthenaWorkGroupWorkGroupConfigurationUpdates)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.putWorkGroupConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRecursiveDeleteOption` <a name="ResetRecursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetRecursiveDeleteOption"></a>

```go
func ResetRecursiveDeleteOption()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetState"></a>

```go
func ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkGroupConfiguration` <a name="ResetWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfiguration"></a>

```go
func ResetWorkGroupConfiguration()
```

##### `ResetWorkGroupConfigurationUpdates` <a name="ResetWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.resetWorkGroupConfigurationUpdates"></a>

```go
func ResetWorkGroupConfigurationUpdates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.AthenaWorkGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.AthenaWorkGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.AthenaWorkGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.AthenaWorkGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AthenaWorkGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AthenaWorkGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AthenaWorkGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AthenaWorkGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration">WorkGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates">WorkGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput">RecursiveDeleteOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput">WorkGroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput">WorkGroupConfigurationUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption">RecursiveDeleteOption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tags"></a>

```go
func Tags() AthenaWorkGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList">AthenaWorkGroupTagsList</a>

---

##### `WorkGroupConfiguration`<sup>Required</sup> <a name="WorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfiguration"></a>

```go
func WorkGroupConfiguration() AthenaWorkGroupWorkGroupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationOutputReference</a>

---

##### `WorkGroupConfigurationUpdates`<sup>Required</sup> <a name="WorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdates"></a>

```go
func WorkGroupConfigurationUpdates() AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecursiveDeleteOptionInput`<sup>Optional</sup> <a name="RecursiveDeleteOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOptionInput"></a>

```go
func RecursiveDeleteOptionInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkGroupConfigurationInput`<sup>Optional</sup> <a name="WorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationInput"></a>

```go
func WorkGroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `WorkGroupConfigurationUpdatesInput`<sup>Optional</sup> <a name="WorkGroupConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.workGroupConfigurationUpdatesInput"></a>

```go
func WorkGroupConfigurationUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecursiveDeleteOption`<sup>Required</sup> <a name="RecursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.recursiveDeleteOption"></a>

```go
func RecursiveDeleteOption() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaWorkGroupConfig <a name="AthenaWorkGroupConfig" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	RecursiveDeleteOption: interface{},
	State: *string,
	Tags: interface{},
	WorkGroupConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration,
	WorkGroupConfigurationUpdates: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name">Name</a></code> | <code>*string</code> | The workGroup name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description">Description</a></code> | <code>*string</code> | The workgroup description. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption">RecursiveDeleteOption</a></code> | <code>interface{}</code> | The option to delete the workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state">State</a></code> | <code>*string</code> | The state of the workgroup: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags, separated by commas, that you want to attach to the workgroup as you create it. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration">WorkGroupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a></code> | The workgroup configuration. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates">WorkGroupConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a></code> | The workgroup configuration update object. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The workGroup name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The workgroup description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#description AthenaWorkGroup#description}

---

##### `RecursiveDeleteOption`<sup>Optional</sup> <a name="RecursiveDeleteOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.recursiveDeleteOption"></a>

```go
RecursiveDeleteOption interface{}
```

- *Type:* interface{}

The option to delete the workgroup and its contents even if the workgroup contains any named queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#recursive_delete_option AthenaWorkGroup#recursive_delete_option}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state of the workgroup: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#state AthenaWorkGroup#state}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags, separated by commas, that you want to attach to the workgroup as you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#tags AthenaWorkGroup#tags}

---

##### `WorkGroupConfiguration`<sup>Optional</sup> <a name="WorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfiguration"></a>

```go
WorkGroupConfiguration AthenaWorkGroupWorkGroupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration">AthenaWorkGroupWorkGroupConfiguration</a>

The workgroup configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration AthenaWorkGroup#work_group_configuration}

---

##### `WorkGroupConfigurationUpdates`<sup>Optional</sup> <a name="WorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupConfig.property.workGroupConfigurationUpdates"></a>

```go
WorkGroupConfigurationUpdates AthenaWorkGroupWorkGroupConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdates</a>

The workgroup configuration update object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#work_group_configuration_updates AthenaWorkGroup#work_group_configuration_updates}

---

### AthenaWorkGroupTags <a name="AthenaWorkGroupTags" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#key AthenaWorkGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#value AthenaWorkGroup#value}.

---

### AthenaWorkGroupWorkGroupConfiguration <a name="AthenaWorkGroupWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfiguration {
	AdditionalConfiguration: *string,
	BytesScannedCutoffPerQuery: *f64,
	CustomerContentEncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration,
	EnforceWorkGroupConfiguration: interface{},
	EngineConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration,
	EngineVersion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion,
	ExecutionRole: *string,
	ManagedQueryResultsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration,
	MonitoringConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration,
	PublishCloudwatchMetricsEnabled: interface{},
	RequesterPaysEnabled: interface{},
	ResultConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>interface{}</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration">ResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a></code> | The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results. |

---

##### `AdditionalConfiguration`<sup>Optional</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.additionalConfiguration"></a>

```go
AdditionalConfiguration *string
```

- *Type:* *string

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `BytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.bytesScannedCutoffPerQuery"></a>

```go
BytesScannedCutoffPerQuery *f64
```

- *Type:* *f64

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `CustomerContentEncryptionConfiguration`<sup>Optional</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.customerContentEncryptionConfiguration"></a>

```go
CustomerContentEncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `EnforceWorkGroupConfiguration`<sup>Optional</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.enforceWorkGroupConfiguration"></a>

```go
EnforceWorkGroupConfiguration interface{}
```

- *Type:* interface{}

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `EngineConfiguration`<sup>Optional</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineConfiguration"></a>

```go
EngineConfiguration AthenaWorkGroupWorkGroupConfigurationEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.engineVersion"></a>

```go
EngineVersion AthenaWorkGroupWorkGroupConfigurationEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `ManagedQueryResultsConfiguration`<sup>Optional</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.managedQueryResultsConfiguration"></a>

```go
ManagedQueryResultsConfiguration AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `MonitoringConfiguration`<sup>Optional</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.monitoringConfiguration"></a>

```go
MonitoringConfiguration AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `PublishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.publishCloudwatchMetricsEnabled"></a>

```go
PublishCloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `RequesterPaysEnabled`<sup>Optional</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.requesterPaysEnabled"></a>

```go
RequesterPaysEnabled interface{}
```

- *Type:* interface{}

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `ResultConfiguration`<sup>Optional</sup> <a name="ResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfiguration.property.resultConfiguration"></a>

```go
ResultConfiguration AthenaWorkGroupWorkGroupConfigurationResultConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

The location in Amazon S3 where query results are stored and the encryption option, if any, used for query results.

These are known as "client-side settings". If workgroup settings override client-side settings, then the query uses the workgroup settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration AthenaWorkGroup#result_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration {
	AdditionalConfigs: *map[string]*string,
	Classifications: interface{},
	CoordinatorDpuSize: *f64,
	DefaultExecutorDpuSize: *f64,
	MaxConcurrentDpus: *f64,
	SparkProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs">AdditionalConfigs</a></code> | <code>*map[string]*string</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications">Classifications</a></code> | <code>interface{}</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties">SparkProperties</a></code> | <code>*map[string]*string</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `AdditionalConfigs`<sup>Optional</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.additionalConfigs"></a>

```go
AdditionalConfigs *map[string]*string
```

- *Type:* *map[string]*string

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `Classifications`<sup>Optional</sup> <a name="Classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.classifications"></a>

```go
Classifications interface{}
```

- *Type:* interface{}

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `CoordinatorDpuSize`<sup>Optional</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.coordinatorDpuSize"></a>

```go
CoordinatorDpuSize *f64
```

- *Type:* *f64

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `DefaultExecutorDpuSize`<sup>Optional</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.defaultExecutorDpuSize"></a>

```go
DefaultExecutorDpuSize *f64
```

- *Type:* *f64

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `MaxConcurrentDpus`<sup>Optional</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.maxConcurrentDpus"></a>

```go
MaxConcurrentDpus *f64
```

- *Type:* *f64

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `SparkProperties`<sup>Optional</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration.property.sparkProperties"></a>

```go
SparkProperties *map[string]*string
```

- *Type:* *map[string]*string

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications {
	Name: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name">Name</a></code> | <code>*string</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A set of properties specified within a configuration classification. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassifications.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion {
	SelectedEngineVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | The engine version requested by the user. |

---

##### `SelectedEngineVersion`<sup>Optional</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion.property.selectedEngineVersion"></a>

```go
SelectedEngineVersion *string
```

- *Type:* *string

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration {
	Enabled: interface{},
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration {
	CloudwatchLoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration,
	ManagedLoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration,
	S3LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `CloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```go
CloudwatchLoggingConfiguration AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `ManagedLoggingConfiguration`<sup>Optional</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```go
ManagedLoggingConfiguration AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `S3LoggingConfiguration`<sup>Optional</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```go
S3LoggingConfiguration AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration {
	Enabled: interface{},
	LogGroup: *string,
	LogStreamNamePrefix: *string,
	LogTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">LogGroup</a></code> | <code>*string</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">LogTypes</a></code> | <code>interface{}</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `LogStreamNamePrefix`<sup>Optional</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```go
LogStreamNamePrefix *string
```

- *Type:* *string

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```go
LogTypes interface{}
```

- *Type:* interface{}

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration {
	Enabled: interface{},
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration {
	Enabled: interface{},
	KmsKey: *string,
	LogLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation">LogLocation</a></code> | <code>*string</code> | The Amazon S3 destination URI for log publishing. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `LogLocation`<sup>Optional</sup> <a name="LogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```go
LogLocation *string
```

- *Type:* *string

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration {
	AclConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration,
	ExpectedBucketOwner: *string,
	OutputLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |

---

##### `AclConfiguration`<sup>Optional</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.aclConfiguration"></a>

```go
AclConfiguration AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration.property.outputLocation"></a>

```go
OutputLocation *string
```

- *Type:* *string

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration {
	S3AclOption: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `S3AclOption`<sup>Optional</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration.property.s3AclOption"></a>

```go
S3AclOption *string
```

- *Type:* *string

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration {
	EncryptionOption: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.encryptionOption"></a>

```go
EncryptionOption *string
```

- *Type:* *string

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdates {
	AdditionalConfiguration: *string,
	BytesScannedCutoffPerQuery: *f64,
	CustomerContentEncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration,
	EnforceWorkGroupConfiguration: interface{},
	EngineConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration,
	EngineVersion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion,
	ExecutionRole: *string,
	ManagedQueryResultsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration,
	MonitoringConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration,
	PublishCloudwatchMetricsEnabled: interface{},
	RemoveBytesScannedCutoffPerQuery: interface{},
	RemoveCustomerContentEncryptionConfiguration: interface{},
	RequesterPaysEnabled: interface{},
	ResultConfigurationUpdates: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | Additional Configuration that are passed to Athena Spark Calculations running in this workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a></code> | Indicates the KMS key for encrypting notebook content. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>interface{}</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a></code> | The engine configuration for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a></code> | The Athena engine version for running queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a></code> | The configuration for the managed query results and encryption option. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a></code> | Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery">RemoveBytesScannedCutoffPerQuery</a></code> | <code>interface{}</code> | Indicates that the data usage control limit per query is removed. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration">RemoveCustomerContentEncryptionConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates">ResultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a></code> | The result configuration information about the queries in this workgroup that will be updated. |

---

##### `AdditionalConfiguration`<sup>Optional</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.additionalConfiguration"></a>

```go
AdditionalConfiguration *string
```

- *Type:* *string

Additional Configuration that are passed to Athena Spark Calculations running in this workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configuration AthenaWorkGroup#additional_configuration}

---

##### `BytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.bytesScannedCutoffPerQuery"></a>

```go
BytesScannedCutoffPerQuery *f64
```

- *Type:* *f64

The upper data usage limit (cutoff) for the amount of bytes a single query in a workgroup is allowed to scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#bytes_scanned_cutoff_per_query AthenaWorkGroup#bytes_scanned_cutoff_per_query}

---

##### `CustomerContentEncryptionConfiguration`<sup>Optional</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.customerContentEncryptionConfiguration"></a>

```go
CustomerContentEncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

Indicates the KMS key for encrypting notebook content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#customer_content_encryption_configuration AthenaWorkGroup#customer_content_encryption_configuration}

---

##### `EnforceWorkGroupConfiguration`<sup>Optional</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.enforceWorkGroupConfiguration"></a>

```go
EnforceWorkGroupConfiguration interface{}
```

- *Type:* interface{}

If set to "true", the settings for the workgroup override client-side settings.

If set to "false", client-side settings are used

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enforce_work_group_configuration AthenaWorkGroup#enforce_work_group_configuration}

---

##### `EngineConfiguration`<sup>Optional</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineConfiguration"></a>

```go
EngineConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

The engine configuration for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_configuration AthenaWorkGroup#engine_configuration}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.engineVersion"></a>

```go
EngineVersion AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

The Athena engine version for running queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#engine_version AthenaWorkGroup#engine_version}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The ARN of the execution role used to access user resources for Spark sessions and Identity Center enabled workgroups.

This property applies only to Spark enabled workgroups and Identity Center enabled workgroups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#execution_role AthenaWorkGroup#execution_role}

---

##### `ManagedQueryResultsConfiguration`<sup>Optional</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.managedQueryResultsConfiguration"></a>

```go
ManagedQueryResultsConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

The configuration for the managed query results and encryption option.

ResultConfiguration and ManagedQueryResultsConfiguration cannot be set at the same time

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_query_results_configuration AthenaWorkGroup#managed_query_results_configuration}

---

##### `MonitoringConfiguration`<sup>Optional</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.monitoringConfiguration"></a>

```go
MonitoringConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

Contains the configuration settings for managed log persistence, delivering logs to Amazon S3 buckets, Amazon CloudWatch log groups etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#monitoring_configuration AthenaWorkGroup#monitoring_configuration}

---

##### `PublishCloudwatchMetricsEnabled`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.publishCloudwatchMetricsEnabled"></a>

```go
PublishCloudwatchMetricsEnabled interface{}
```

- *Type:* interface{}

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#publish_cloudwatch_metrics_enabled AthenaWorkGroup#publish_cloudwatch_metrics_enabled}

---

##### `RemoveBytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="RemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeBytesScannedCutoffPerQuery"></a>

```go
RemoveBytesScannedCutoffPerQuery interface{}
```

- *Type:* interface{}

Indicates that the data usage control limit per query is removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_bytes_scanned_cutoff_per_query AthenaWorkGroup#remove_bytes_scanned_cutoff_per_query}

---

##### `RemoveCustomerContentEncryptionConfiguration`<sup>Optional</sup> <a name="RemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.removeCustomerContentEncryptionConfiguration"></a>

```go
RemoveCustomerContentEncryptionConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_customer_content_encryption_configuration AthenaWorkGroup#remove_customer_content_encryption_configuration}.

---

##### `RequesterPaysEnabled`<sup>Optional</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.requesterPaysEnabled"></a>

```go
RequesterPaysEnabled interface{}
```

- *Type:* interface{}

If set to true, allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

If set to false, workgroup members cannot query data from Requester Pays buckets, and queries that retrieve data from Requester Pays buckets cause an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#requester_pays_enabled AthenaWorkGroup#requester_pays_enabled}

---

##### `ResultConfigurationUpdates`<sup>Optional</sup> <a name="ResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdates.property.resultConfigurationUpdates"></a>

```go
ResultConfigurationUpdates AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

The result configuration information about the queries in this workgroup that will be updated.

Includes the updated results location and an updated option for encrypting query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#result_configuration_updates AthenaWorkGroup#result_configuration_updates}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration {
	AdditionalConfigs: *map[string]*string,
	Classifications: interface{},
	CoordinatorDpuSize: *f64,
	DefaultExecutorDpuSize: *f64,
	MaxConcurrentDpus: *f64,
	SparkProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs">AdditionalConfigs</a></code> | <code>*map[string]*string</code> | Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications">Classifications</a></code> | <code>interface{}</code> | The configuration classifications that can be specified for the engine. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | The number of DPUs to use for the coordinator. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | The default number of DPUs to use for executors. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | The maximum number of DPUs that can run concurrently. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties">SparkProperties</a></code> | <code>*map[string]*string</code> | Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning. |

---

##### `AdditionalConfigs`<sup>Optional</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.additionalConfigs"></a>

```go
AdditionalConfigs *map[string]*string
```

- *Type:* *map[string]*string

Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs.

To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#additional_configs AthenaWorkGroup#additional_configs}

---

##### `Classifications`<sup>Optional</sup> <a name="Classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.classifications"></a>

```go
Classifications interface{}
```

- *Type:* interface{}

The configuration classifications that can be specified for the engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#classifications AthenaWorkGroup#classifications}

---

##### `CoordinatorDpuSize`<sup>Optional</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.coordinatorDpuSize"></a>

```go
CoordinatorDpuSize *f64
```

- *Type:* *f64

The number of DPUs to use for the coordinator.

A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#coordinator_dpu_size AthenaWorkGroup#coordinator_dpu_size}

---

##### `DefaultExecutorDpuSize`<sup>Optional</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.defaultExecutorDpuSize"></a>

```go
DefaultExecutorDpuSize *f64
```

- *Type:* *f64

The default number of DPUs to use for executors.

An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#default_executor_dpu_size AthenaWorkGroup#default_executor_dpu_size}

---

##### `MaxConcurrentDpus`<sup>Optional</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.maxConcurrentDpus"></a>

```go
MaxConcurrentDpus *f64
```

- *Type:* *f64

The maximum number of DPUs that can run concurrently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#max_concurrent_dpus AthenaWorkGroup#max_concurrent_dpus}

---

##### `SparkProperties`<sup>Optional</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration.property.sparkProperties"></a>

```go
SparkProperties *map[string]*string
```

- *Type:* *map[string]*string

Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#spark_properties AthenaWorkGroup#spark_properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications {
	Name: *string,
	Properties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name">Name</a></code> | <code>*string</code> | The name of the configuration classification. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties">Properties</a></code> | <code>*map[string]*string</code> | A set of properties specified within a configuration classification. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#name AthenaWorkGroup#name}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassifications.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

A set of properties specified within a configuration classification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#properties AthenaWorkGroup#properties}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion {
	SelectedEngineVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | The engine version requested by the user. |

---

##### `SelectedEngineVersion`<sup>Optional</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion.property.selectedEngineVersion"></a>

```go
SelectedEngineVersion *string
```

- *Type:* *string

The engine version requested by the user.

Possible values are determined by the output of ListEngineVersions, including Auto. The default is Auto.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#selected_engine_version AthenaWorkGroup#selected_engine_version}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration {
	Enabled: interface{},
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a></code> | Indicates the encryption configuration for Athena Managed Storage. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

Indicates the encryption configuration for Athena Managed Storage.

If not setting this field, Managed Storage will encrypt the query results with Athena's encryption key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration {
	CloudwatchLoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration,
	ManagedLoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration,
	S3LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon CloudWatch log groups. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a></code> | Configuration settings for managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a></code> | Configuration settings for delivering logs to Amazon S3 buckets. |

---

##### `CloudwatchLoggingConfiguration`<sup>Optional</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.cloudwatchLoggingConfiguration"></a>

```go
CloudwatchLoggingConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

Configuration settings for delivering logs to Amazon CloudWatch log groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#cloudwatch_logging_configuration AthenaWorkGroup#cloudwatch_logging_configuration}

---

##### `ManagedLoggingConfiguration`<sup>Optional</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.managedLoggingConfiguration"></a>

```go
ManagedLoggingConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

Configuration settings for managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#managed_logging_configuration AthenaWorkGroup#managed_logging_configuration}

---

##### `S3LoggingConfiguration`<sup>Optional</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration.property.s3LoggingConfiguration"></a>

```go
S3LoggingConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

Configuration settings for delivering logs to Amazon S3 buckets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_logging_configuration AthenaWorkGroup#s3_logging_configuration}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration {
	Enabled: interface{},
	LogGroup: *string,
	LogStreamNamePrefix: *string,
	LogTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables CloudWatch logging. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup">LogGroup</a></code> | <code>*string</code> | The name of the log group in Amazon CloudWatch Logs where you want to publish your logs. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | Prefix for the CloudWatch log stream name. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes">LogTypes</a></code> | <code>interface{}</code> | The types of logs that you want to publish to CloudWatch. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables CloudWatch logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logGroup"></a>

```go
LogGroup *string
```

- *Type:* *string

The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_group AthenaWorkGroup#log_group}

---

##### `LogStreamNamePrefix`<sup>Optional</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logStreamNamePrefix"></a>

```go
LogStreamNamePrefix *string
```

- *Type:* *string

Prefix for the CloudWatch log stream name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_stream_name_prefix AthenaWorkGroup#log_stream_name_prefix}

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration.property.logTypes"></a>

```go
LogTypes interface{}
```

- *Type:* interface{}

The types of logs that you want to publish to CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_types AthenaWorkGroup#log_types}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration {
	Enabled: interface{},
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables managed log persistence. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key ARN to encrypt the logs stored in managed log persistence. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key ARN to encrypt the logs stored in managed log persistence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration {
	Enabled: interface{},
	KmsKey: *string,
	LogLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables S3 log delivery. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation">LogLocation</a></code> | <code>*string</code> | The Amazon S3 destination URI for log publishing. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables S3 log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#enabled AthenaWorkGroup#enabled}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

##### `LogLocation`<sup>Optional</sup> <a name="LogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration.property.logLocation"></a>

```go
LogLocation *string
```

- *Type:* *string

The Amazon S3 destination URI for log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#log_location AthenaWorkGroup#log_location}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates {
	AclConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration,
	ExpectedBucketOwner: *string,
	OutputLocation: *string,
	RemoveAclConfiguration: interface{},
	RemoveEncryptionConfiguration: interface{},
	RemoveExpectedBucketOwner: interface{},
	RemoveOutputLocation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a></code> | Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a></code> | If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | The AWS account ID of the owner of S3 bucket where query results are stored. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration">RemoveAclConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration">RemoveEncryptionConfiguration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner">RemoveExpectedBucketOwner</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation">RemoveOutputLocation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}. |

---

##### `AclConfiguration`<sup>Optional</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.aclConfiguration"></a>

```go
AclConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

Indicates that an Amazon S3 canned ACL should be set to control ownership of stored query results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#acl_configuration AthenaWorkGroup#acl_configuration}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

If query results are encrypted in Amazon S3, indicates the encryption option used (for example, SSE-KMS or CSE-KMS) and key information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_configuration AthenaWorkGroup#encryption_configuration}

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.expectedBucketOwner"></a>

```go
ExpectedBucketOwner *string
```

- *Type:* *string

The AWS account ID of the owner of S3 bucket where query results are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#expected_bucket_owner AthenaWorkGroup#expected_bucket_owner}

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.outputLocation"></a>

```go
OutputLocation *string
```

- *Type:* *string

The location in Amazon S3 where your query results are stored, such as s3://path/to/query/bucket/.

To run the query, you must specify the query results location using one of the ways: either for individual queries using either this setting (client-side), or in the workgroup, using WorkGroupConfiguration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#output_location AthenaWorkGroup#output_location}

---

##### `RemoveAclConfiguration`<sup>Optional</sup> <a name="RemoveAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeAclConfiguration"></a>

```go
RemoveAclConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_acl_configuration AthenaWorkGroup#remove_acl_configuration}.

---

##### `RemoveEncryptionConfiguration`<sup>Optional</sup> <a name="RemoveEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeEncryptionConfiguration"></a>

```go
RemoveEncryptionConfiguration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_encryption_configuration AthenaWorkGroup#remove_encryption_configuration}.

---

##### `RemoveExpectedBucketOwner`<sup>Optional</sup> <a name="RemoveExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeExpectedBucketOwner"></a>

```go
RemoveExpectedBucketOwner interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_expected_bucket_owner AthenaWorkGroup#remove_expected_bucket_owner}.

---

##### `RemoveOutputLocation`<sup>Optional</sup> <a name="RemoveOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates.property.removeOutputLocation"></a>

```go
RemoveOutputLocation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#remove_output_location AthenaWorkGroup#remove_output_location}.

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration {
	S3AclOption: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | The Amazon S3 canned ACL that Athena should specify when storing query results. |

---

##### `S3AclOption`<sup>Optional</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration.property.s3AclOption"></a>

```go
S3AclOption *string
```

- *Type:* *string

The Amazon S3 canned ACL that Athena should specify when storing query results.

Currently the only supported canned ACL is BUCKET_OWNER_FULL_CONTROL

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#s3_acl_option AthenaWorkGroup#s3_acl_option}

---

### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

&athenaworkgroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration {
	EncryptionOption: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID. |

---

##### `EncryptionOption`<sup>Optional</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.encryptionOption"></a>

```go
EncryptionOption *string
```

- *Type:* *string

Indicates whether Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3), server-side encryption with KMS-managed keys (SSE-KMS), or client-side encryption with KMS-managed keys (CSE-KMS) is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#encryption_option AthenaWorkGroup#encryption_option}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

For SSE-KMS and CSE-KMS, this is the KMS key ARN or ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/athena_work_group#kms_key AthenaWorkGroup#kms_key}

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaWorkGroupTagsList <a name="AthenaWorkGroupTagsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AthenaWorkGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get"></a>

```go
func Get(index *f64) AthenaWorkGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupTagsOutputReference <a name="AthenaWorkGroupTagsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AthenaWorkGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get"></a>

```go
func Get(index *f64) AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications">PutClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs">ResetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications">ResetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize">ResetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">ResetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus">ResetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties">ResetSparkProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClassifications` <a name="PutClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications"></a>

```go
func PutClassifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalConfigs` <a name="ResetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```go
func ResetAdditionalConfigs()
```

##### `ResetClassifications` <a name="ResetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetClassifications"></a>

```go
func ResetClassifications()
```

##### `ResetCoordinatorDpuSize` <a name="ResetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```go
func ResetCoordinatorDpuSize()
```

##### `ResetDefaultExecutorDpuSize` <a name="ResetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```go
func ResetDefaultExecutorDpuSize()
```

##### `ResetMaxConcurrentDpus` <a name="ResetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```go
func ResetMaxConcurrentDpus()
```

##### `ResetSparkProperties` <a name="ResetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.resetSparkProperties"></a>

```go
func ResetSparkProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications">Classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput">AdditionalConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput">ClassificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">CoordinatorDpuSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">DefaultExecutorDpuSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput">MaxConcurrentDpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput">SparkPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs">AdditionalConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classifications"></a>

```go
func Classifications() AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationClassificationsList</a>

---

##### `AdditionalConfigsInput`<sup>Optional</sup> <a name="AdditionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```go
func AdditionalConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClassificationsInput`<sup>Optional</sup> <a name="ClassificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.classificationsInput"></a>

```go
func ClassificationsInput() interface{}
```

- *Type:* interface{}

---

##### `CoordinatorDpuSizeInput`<sup>Optional</sup> <a name="CoordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```go
func CoordinatorDpuSizeInput() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="DefaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```go
func DefaultExecutorDpuSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpusInput`<sup>Optional</sup> <a name="MaxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```go
func MaxConcurrentDpusInput() *f64
```

- *Type:* *f64

---

##### `SparkPropertiesInput`<sup>Optional</sup> <a name="SparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```go
func SparkPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalConfigs`<sup>Required</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.additionalConfigs"></a>

```go
func AdditionalConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CoordinatorDpuSize`<sup>Required</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```go
func CoordinatorDpuSize() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSize`<sup>Required</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```go
func DefaultExecutorDpuSize() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpus`<sup>Required</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```go
func MaxConcurrentDpus() *f64
```

- *Type:* *f64

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.sparkProperties"></a>

```go
func SparkProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion">ResetSelectedEngineVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelectedEngineVersion` <a name="ResetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```go
func ResetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion">EffectiveEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput">SelectedEngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEngineVersion`<sup>Required</sup> <a name="EffectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```go
func EffectiveEngineVersion() *string
```

- *Type:* *string

---

##### `SelectedEngineVersionInput`<sup>Optional</sup> <a name="SelectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```go
func SelectedEngineVersionInput() *string
```

- *Type:* *string

---

##### `SelectedEngineVersion`<sup>Required</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.selectedEngineVersion"></a>

```go
func SelectedEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">ResetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```

##### `ResetLogStreamNamePrefix` <a name="ResetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```go
func ResetLogStreamNamePrefix()
```

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```go
func ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">LogStreamNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefixInput`<sup>Optional</sup> <a name="LogStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```go
func LogStreamNamePrefixInput() *string
```

- *Type:* *string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```go
func LogTypesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```go
func LogStreamNamePrefix() *string
```

- *Type:* *string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```go
func LogTypes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">PutCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">PutManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration">PutS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">ResetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">ResetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">ResetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLoggingConfiguration` <a name="PutCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```go
func PutCloudwatchLoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `PutManagedLoggingConfiguration` <a name="PutManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```go
func PutManagedLoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `PutS3LoggingConfiguration` <a name="PutS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```go
func PutS3LoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `ResetCloudwatchLoggingConfiguration` <a name="ResetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```go
func ResetCloudwatchLoggingConfiguration()
```

##### `ResetManagedLoggingConfiguration` <a name="ResetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```go
func ResetManagedLoggingConfiguration()
```

##### `ResetS3LoggingConfiguration` <a name="ResetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```go
func ResetS3LoggingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">CloudwatchLoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">ManagedLoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">S3LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLoggingConfiguration`<sup>Required</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```go
func CloudwatchLoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `ManagedLoggingConfiguration`<sup>Required</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```go
func ManagedLoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `S3LoggingConfiguration`<sup>Required</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```go
func S3LoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `CloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```go
func CloudwatchLoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedLoggingConfigurationInput`<sup>Optional</sup> <a name="ManagedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```go
func ManagedLoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3LoggingConfigurationInput`<sup>Optional</sup> <a name="S3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```go
func S3LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">ResetLogLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLogLocation` <a name="ResetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```go
func ResetLogLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">LogLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">LogLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LogLocationInput`<sup>Optional</sup> <a name="LogLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```go
func LogLocationInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```go
func LogLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration">PutCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration">PutEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion">PutEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration">PutManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration">PutMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration">PutResultConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration">ResetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery">ResetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration">ResetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration">ResetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration">ResetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration">ResetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration">ResetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled">ResetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled">ResetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration">ResetResultConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerContentEncryptionConfiguration` <a name="PutCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration"></a>

```go
func PutCustomerContentEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfiguration</a>

---

##### `PutEngineConfiguration` <a name="PutEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration"></a>

```go
func PutEngineConfiguration(value AthenaWorkGroupWorkGroupConfigurationEngineConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationEngineConfiguration</a>

---

##### `PutEngineVersion` <a name="PutEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion"></a>

```go
func PutEngineVersion(value AthenaWorkGroupWorkGroupConfigurationEngineVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersion">AthenaWorkGroupWorkGroupConfigurationEngineVersion</a>

---

##### `PutManagedQueryResultsConfiguration` <a name="PutManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration"></a>

```go
func PutManagedQueryResultsConfiguration(value AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfiguration</a>

---

##### `PutMonitoringConfiguration` <a name="PutMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration"></a>

```go
func PutMonitoringConfiguration(value AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationMonitoringConfiguration</a>

---

##### `PutResultConfiguration` <a name="PutResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration"></a>

```go
func PutResultConfiguration(value AthenaWorkGroupWorkGroupConfigurationResultConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.putResultConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfiguration</a>

---

##### `ResetAdditionalConfiguration` <a name="ResetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetAdditionalConfiguration"></a>

```go
func ResetAdditionalConfiguration()
```

##### `ResetBytesScannedCutoffPerQuery` <a name="ResetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetBytesScannedCutoffPerQuery"></a>

```go
func ResetBytesScannedCutoffPerQuery()
```

##### `ResetCustomerContentEncryptionConfiguration` <a name="ResetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```go
func ResetCustomerContentEncryptionConfiguration()
```

##### `ResetEnforceWorkGroupConfiguration` <a name="ResetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEnforceWorkGroupConfiguration"></a>

```go
func ResetEnforceWorkGroupConfiguration()
```

##### `ResetEngineConfiguration` <a name="ResetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineConfiguration"></a>

```go
func ResetEngineConfiguration()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetExecutionRole"></a>

```go
func ResetExecutionRole()
```

##### `ResetManagedQueryResultsConfiguration` <a name="ResetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetManagedQueryResultsConfiguration"></a>

```go
func ResetManagedQueryResultsConfiguration()
```

##### `ResetMonitoringConfiguration` <a name="ResetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetMonitoringConfiguration"></a>

```go
func ResetMonitoringConfiguration()
```

##### `ResetPublishCloudwatchMetricsEnabled` <a name="ResetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```go
func ResetPublishCloudwatchMetricsEnabled()
```

##### `ResetRequesterPaysEnabled` <a name="ResetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetRequesterPaysEnabled"></a>

```go
func ResetRequesterPaysEnabled()
```

##### `ResetResultConfiguration` <a name="ResetResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.resetResultConfiguration"></a>

```go
func ResetResultConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration">ResultConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput">AdditionalConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput">BytesScannedCutoffPerQueryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput">CustomerContentEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput">EnforceWorkGroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput">EngineConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput">EngineVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput">ManagedQueryResultsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput">MonitoringConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput">PublishCloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput">RequesterPaysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput">ResultConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfiguration"></a>

```go
func CustomerContentEncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `EngineConfiguration`<sup>Required</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfiguration"></a>

```go
func EngineConfiguration() AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineConfigurationOutputReference</a>

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersion"></a>

```go
func EngineVersion() AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationEngineVersionOutputReference</a>

---

##### `ManagedQueryResultsConfiguration`<sup>Required</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfiguration"></a>

```go
func ManagedQueryResultsConfiguration() AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationManagedQueryResultsConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationMonitoringConfigurationOutputReference</a>

---

##### `ResultConfiguration`<sup>Required</sup> <a name="ResultConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfiguration"></a>

```go
func ResultConfiguration() AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference</a>

---

##### `AdditionalConfigurationInput`<sup>Optional</sup> <a name="AdditionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfigurationInput"></a>

```go
func AdditionalConfigurationInput() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="BytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```go
func BytesScannedCutoffPerQueryInput() *f64
```

- *Type:* *f64

---

##### `CustomerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="CustomerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```go
func CustomerContentEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="EnforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```go
func EnforceWorkGroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigurationInput`<sup>Optional</sup> <a name="EngineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineConfigurationInput"></a>

```go
func EngineConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.engineVersionInput"></a>

```go
func EngineVersionInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `ManagedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="ManagedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.managedQueryResultsConfigurationInput"></a>

```go
func ManagedQueryResultsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringConfigurationInput`<sup>Optional</sup> <a name="MonitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```go
func MonitoringConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PublishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```go
func PublishCloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabledInput`<sup>Optional</sup> <a name="RequesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabledInput"></a>

```go
func RequesterPaysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResultConfigurationInput`<sup>Optional</sup> <a name="ResultConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.resultConfigurationInput"></a>

```go
func ResultConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.additionalConfiguration"></a>

```go
func AdditionalConfiguration() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQuery`<sup>Required</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.bytesScannedCutoffPerQuery"></a>

```go
func BytesScannedCutoffPerQuery() *f64
```

- *Type:* *f64

---

##### `EnforceWorkGroupConfiguration`<sup>Required</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.enforceWorkGroupConfiguration"></a>

```go
func EnforceWorkGroupConfiguration() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `PublishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```go
func PublishCloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabled`<sup>Required</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.requesterPaysEnabled"></a>

```go
func RequesterPaysEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption">ResetS3AclOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3AclOption` <a name="ResetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.resetS3AclOption"></a>

```go
func ResetS3AclOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput">S3AclOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3AclOptionInput`<sup>Optional</sup> <a name="S3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```go
func S3AclOptionInput() *string
```

- *Type:* *string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.s3AclOption"></a>

```go
func S3AclOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```go
func ResetEncryptionOption()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```go
func EncryptionOptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration">PutAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration">ResetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAclConfiguration` <a name="PutAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration"></a>

```go
func PutAclConfiguration(value AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfiguration</a>

---

##### `ResetAclConfiguration` <a name="ResetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetAclConfiguration"></a>

```go
func ResetAclConfiguration()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput">AclConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfiguration"></a>

```go
func AclConfiguration() AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationResultConfigurationEncryptionConfigurationOutputReference</a>

---

##### `AclConfigurationInput`<sup>Optional</sup> <a name="AclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.aclConfigurationInput"></a>

```go
func AclConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocationInput"></a>

```go
func OutputLocationInput() *string
```

- *Type:* *string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationResultConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get"></a>

```go
func Get(index *f64) AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications">PutClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs">ResetAdditionalConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications">ResetClassifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize">ResetCoordinatorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize">ResetDefaultExecutorDpuSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus">ResetMaxConcurrentDpus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties">ResetSparkProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClassifications` <a name="PutClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications"></a>

```go
func PutClassifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.putClassifications.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalConfigs` <a name="ResetAdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetAdditionalConfigs"></a>

```go
func ResetAdditionalConfigs()
```

##### `ResetClassifications` <a name="ResetClassifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetClassifications"></a>

```go
func ResetClassifications()
```

##### `ResetCoordinatorDpuSize` <a name="ResetCoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetCoordinatorDpuSize"></a>

```go
func ResetCoordinatorDpuSize()
```

##### `ResetDefaultExecutorDpuSize` <a name="ResetDefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetDefaultExecutorDpuSize"></a>

```go
func ResetDefaultExecutorDpuSize()
```

##### `ResetMaxConcurrentDpus` <a name="ResetMaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetMaxConcurrentDpus"></a>

```go
func ResetMaxConcurrentDpus()
```

##### `ResetSparkProperties` <a name="ResetSparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.resetSparkProperties"></a>

```go
func ResetSparkProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications">Classifications</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput">AdditionalConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput">ClassificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput">CoordinatorDpuSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput">DefaultExecutorDpuSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput">MaxConcurrentDpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput">SparkPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs">AdditionalConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize">CoordinatorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize">DefaultExecutorDpuSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus">MaxConcurrentDpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties">SparkProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Classifications`<sup>Required</sup> <a name="Classifications" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classifications"></a>

```go
func Classifications() AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationClassificationsList</a>

---

##### `AdditionalConfigsInput`<sup>Optional</sup> <a name="AdditionalConfigsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigsInput"></a>

```go
func AdditionalConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClassificationsInput`<sup>Optional</sup> <a name="ClassificationsInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.classificationsInput"></a>

```go
func ClassificationsInput() interface{}
```

- *Type:* interface{}

---

##### `CoordinatorDpuSizeInput`<sup>Optional</sup> <a name="CoordinatorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSizeInput"></a>

```go
func CoordinatorDpuSizeInput() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSizeInput`<sup>Optional</sup> <a name="DefaultExecutorDpuSizeInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSizeInput"></a>

```go
func DefaultExecutorDpuSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpusInput`<sup>Optional</sup> <a name="MaxConcurrentDpusInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpusInput"></a>

```go
func MaxConcurrentDpusInput() *f64
```

- *Type:* *f64

---

##### `SparkPropertiesInput`<sup>Optional</sup> <a name="SparkPropertiesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkPropertiesInput"></a>

```go
func SparkPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AdditionalConfigs`<sup>Required</sup> <a name="AdditionalConfigs" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.additionalConfigs"></a>

```go
func AdditionalConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CoordinatorDpuSize`<sup>Required</sup> <a name="CoordinatorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.coordinatorDpuSize"></a>

```go
func CoordinatorDpuSize() *f64
```

- *Type:* *f64

---

##### `DefaultExecutorDpuSize`<sup>Required</sup> <a name="DefaultExecutorDpuSize" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.defaultExecutorDpuSize"></a>

```go
func DefaultExecutorDpuSize() *f64
```

- *Type:* *f64

---

##### `MaxConcurrentDpus`<sup>Required</sup> <a name="MaxConcurrentDpus" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.maxConcurrentDpus"></a>

```go
func MaxConcurrentDpus() *f64
```

- *Type:* *f64

---

##### `SparkProperties`<sup>Required</sup> <a name="SparkProperties" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.sparkProperties"></a>

```go
func SparkProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion">ResetSelectedEngineVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSelectedEngineVersion` <a name="ResetSelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.resetSelectedEngineVersion"></a>

```go
func ResetSelectedEngineVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion">EffectiveEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput">SelectedEngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion">SelectedEngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEngineVersion`<sup>Required</sup> <a name="EffectiveEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.effectiveEngineVersion"></a>

```go
func EffectiveEngineVersion() *string
```

- *Type:* *string

---

##### `SelectedEngineVersionInput`<sup>Optional</sup> <a name="SelectedEngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersionInput"></a>

```go
func SelectedEngineVersionInput() *string
```

- *Type:* *string

---

##### `SelectedEngineVersion`<sup>Required</sup> <a name="SelectedEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.selectedEngineVersion"></a>

```go
func SelectedEngineVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfiguration</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationEncryptionConfigurationOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix">ResetLogStreamNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogGroup"></a>

```go
func ResetLogGroup()
```

##### `ResetLogStreamNamePrefix` <a name="ResetLogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```go
func ResetLogStreamNamePrefix()
```

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.resetLogTypes"></a>

```go
func ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput">LogStreamNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes">LogTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroupInput"></a>

```go
func LogGroupInput() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefixInput`<sup>Optional</sup> <a name="LogStreamNamePrefixInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```go
func LogStreamNamePrefixInput() *string
```

- *Type:* *string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypesInput"></a>

```go
func LogTypesInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logGroup"></a>

```go
func LogGroup() *string
```

- *Type:* *string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logStreamNamePrefix"></a>

```go
func LogStreamNamePrefix() *string
```

- *Type:* *string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.logTypes"></a>

```go
func LogTypes() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration">PutCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration">PutManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration">PutS3LoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration">ResetCloudwatchLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration">ResetManagedLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration">ResetS3LoggingConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLoggingConfiguration` <a name="PutCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration"></a>

```go
func PutCloudwatchLoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putCloudwatchLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfiguration</a>

---

##### `PutManagedLoggingConfiguration` <a name="PutManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration"></a>

```go
func PutManagedLoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putManagedLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfiguration</a>

---

##### `PutS3LoggingConfiguration` <a name="PutS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration"></a>

```go
func PutS3LoggingConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.putS3LoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfiguration</a>

---

##### `ResetCloudwatchLoggingConfiguration` <a name="ResetCloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetCloudwatchLoggingConfiguration"></a>

```go
func ResetCloudwatchLoggingConfiguration()
```

##### `ResetManagedLoggingConfiguration` <a name="ResetManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetManagedLoggingConfiguration"></a>

```go
func ResetManagedLoggingConfiguration()
```

##### `ResetS3LoggingConfiguration` <a name="ResetS3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.resetS3LoggingConfiguration"></a>

```go
func ResetS3LoggingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration">CloudwatchLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration">ManagedLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration">S3LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput">CloudwatchLoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput">ManagedLoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput">S3LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLoggingConfiguration`<sup>Required</sup> <a name="CloudwatchLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfiguration"></a>

```go
func CloudwatchLoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationCloudwatchLoggingConfigurationOutputReference</a>

---

##### `ManagedLoggingConfiguration`<sup>Required</sup> <a name="ManagedLoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfiguration"></a>

```go
func ManagedLoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationManagedLoggingConfigurationOutputReference</a>

---

##### `S3LoggingConfiguration`<sup>Required</sup> <a name="S3LoggingConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfiguration"></a>

```go
func S3LoggingConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference</a>

---

##### `CloudwatchLoggingConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.cloudwatchLoggingConfigurationInput"></a>

```go
func CloudwatchLoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedLoggingConfigurationInput`<sup>Optional</sup> <a name="ManagedLoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.managedLoggingConfigurationInput"></a>

```go
func ManagedLoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `S3LoggingConfigurationInput`<sup>Optional</sup> <a name="S3LoggingConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.s3LoggingConfigurationInput"></a>

```go
func S3LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation">ResetLogLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLogLocation` <a name="ResetLogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.resetLogLocation"></a>

```go
func ResetLogLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput">LogLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation">LogLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LogLocationInput`<sup>Optional</sup> <a name="LogLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocationInput"></a>

```go
func LogLocationInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `LogLocation`<sup>Required</sup> <a name="LogLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.logLocation"></a>

```go
func LogLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationS3LoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration">PutCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration">PutEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion">PutEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration">PutManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration">PutMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates">PutResultConfigurationUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration">ResetAdditionalConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery">ResetBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration">ResetCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration">ResetEnforceWorkGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration">ResetEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration">ResetManagedQueryResultsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration">ResetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled">ResetPublishCloudwatchMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery">ResetRemoveBytesScannedCutoffPerQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration">ResetRemoveCustomerContentEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled">ResetRequesterPaysEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates">ResetResultConfigurationUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerContentEncryptionConfiguration` <a name="PutCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration"></a>

```go
func PutCustomerContentEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putCustomerContentEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfiguration</a>

---

##### `PutEngineConfiguration` <a name="PutEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration"></a>

```go
func PutEngineConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfiguration</a>

---

##### `PutEngineVersion` <a name="PutEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion"></a>

```go
func PutEngineVersion(value AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersion</a>

---

##### `PutManagedQueryResultsConfiguration` <a name="PutManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration"></a>

```go
func PutManagedQueryResultsConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putManagedQueryResultsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfiguration</a>

---

##### `PutMonitoringConfiguration` <a name="PutMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration"></a>

```go
func PutMonitoringConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfiguration</a>

---

##### `PutResultConfigurationUpdates` <a name="PutResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates"></a>

```go
func PutResultConfigurationUpdates(value AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.putResultConfigurationUpdates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdates</a>

---

##### `ResetAdditionalConfiguration` <a name="ResetAdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetAdditionalConfiguration"></a>

```go
func ResetAdditionalConfiguration()
```

##### `ResetBytesScannedCutoffPerQuery` <a name="ResetBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetBytesScannedCutoffPerQuery"></a>

```go
func ResetBytesScannedCutoffPerQuery()
```

##### `ResetCustomerContentEncryptionConfiguration` <a name="ResetCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetCustomerContentEncryptionConfiguration"></a>

```go
func ResetCustomerContentEncryptionConfiguration()
```

##### `ResetEnforceWorkGroupConfiguration` <a name="ResetEnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEnforceWorkGroupConfiguration"></a>

```go
func ResetEnforceWorkGroupConfiguration()
```

##### `ResetEngineConfiguration` <a name="ResetEngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineConfiguration"></a>

```go
func ResetEngineConfiguration()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetEngineVersion"></a>

```go
func ResetEngineVersion()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetExecutionRole"></a>

```go
func ResetExecutionRole()
```

##### `ResetManagedQueryResultsConfiguration` <a name="ResetManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetManagedQueryResultsConfiguration"></a>

```go
func ResetManagedQueryResultsConfiguration()
```

##### `ResetMonitoringConfiguration` <a name="ResetMonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetMonitoringConfiguration"></a>

```go
func ResetMonitoringConfiguration()
```

##### `ResetPublishCloudwatchMetricsEnabled` <a name="ResetPublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetPublishCloudwatchMetricsEnabled"></a>

```go
func ResetPublishCloudwatchMetricsEnabled()
```

##### `ResetRemoveBytesScannedCutoffPerQuery` <a name="ResetRemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveBytesScannedCutoffPerQuery"></a>

```go
func ResetRemoveBytesScannedCutoffPerQuery()
```

##### `ResetRemoveCustomerContentEncryptionConfiguration` <a name="ResetRemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRemoveCustomerContentEncryptionConfiguration"></a>

```go
func ResetRemoveCustomerContentEncryptionConfiguration()
```

##### `ResetRequesterPaysEnabled` <a name="ResetRequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetRequesterPaysEnabled"></a>

```go
func ResetRequesterPaysEnabled()
```

##### `ResetResultConfigurationUpdates` <a name="ResetResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.resetResultConfigurationUpdates"></a>

```go
func ResetResultConfigurationUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration">CustomerContentEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration">EngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion">EngineVersion</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration">ManagedQueryResultsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates">ResultConfigurationUpdates</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput">AdditionalConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput">BytesScannedCutoffPerQueryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput">CustomerContentEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput">EnforceWorkGroupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput">EngineConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput">EngineVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput">ManagedQueryResultsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput">MonitoringConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput">PublishCloudwatchMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput">RemoveBytesScannedCutoffPerQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput">RemoveCustomerContentEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput">RequesterPaysEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput">ResultConfigurationUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration">AdditionalConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery">BytesScannedCutoffPerQuery</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration">EnforceWorkGroupConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled">PublishCloudwatchMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery">RemoveBytesScannedCutoffPerQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration">RemoveCustomerContentEncryptionConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled">RequesterPaysEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="CustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfiguration"></a>

```go
func CustomerContentEncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesCustomerContentEncryptionConfigurationOutputReference</a>

---

##### `EngineConfiguration`<sup>Required</sup> <a name="EngineConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfiguration"></a>

```go
func EngineConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineConfigurationOutputReference</a>

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersion"></a>

```go
func EngineVersion() AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesEngineVersionOutputReference</a>

---

##### `ManagedQueryResultsConfiguration`<sup>Required</sup> <a name="ManagedQueryResultsConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfiguration"></a>

```go
func ManagedQueryResultsConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesManagedQueryResultsConfigurationOutputReference</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfiguration"></a>

```go
func MonitoringConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesMonitoringConfigurationOutputReference</a>

---

##### `ResultConfigurationUpdates`<sup>Required</sup> <a name="ResultConfigurationUpdates" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdates"></a>

```go
func ResultConfigurationUpdates() AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference</a>

---

##### `AdditionalConfigurationInput`<sup>Optional</sup> <a name="AdditionalConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfigurationInput"></a>

```go
func AdditionalConfigurationInput() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="BytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQueryInput"></a>

```go
func BytesScannedCutoffPerQueryInput() *f64
```

- *Type:* *f64

---

##### `CustomerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="CustomerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.customerContentEncryptionConfigurationInput"></a>

```go
func CustomerContentEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceWorkGroupConfigurationInput`<sup>Optional</sup> <a name="EnforceWorkGroupConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfigurationInput"></a>

```go
func EnforceWorkGroupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EngineConfigurationInput`<sup>Optional</sup> <a name="EngineConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineConfigurationInput"></a>

```go
func EngineConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.engineVersionInput"></a>

```go
func EngineVersionInput() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `ManagedQueryResultsConfigurationInput`<sup>Optional</sup> <a name="ManagedQueryResultsConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.managedQueryResultsConfigurationInput"></a>

```go
func ManagedQueryResultsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringConfigurationInput`<sup>Optional</sup> <a name="MonitoringConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.monitoringConfigurationInput"></a>

```go
func MonitoringConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PublishCloudwatchMetricsEnabledInput`<sup>Optional</sup> <a name="PublishCloudwatchMetricsEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabledInput"></a>

```go
func PublishCloudwatchMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveBytesScannedCutoffPerQueryInput`<sup>Optional</sup> <a name="RemoveBytesScannedCutoffPerQueryInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQueryInput"></a>

```go
func RemoveBytesScannedCutoffPerQueryInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveCustomerContentEncryptionConfigurationInput`<sup>Optional</sup> <a name="RemoveCustomerContentEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfigurationInput"></a>

```go
func RemoveCustomerContentEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabledInput`<sup>Optional</sup> <a name="RequesterPaysEnabledInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabledInput"></a>

```go
func RequesterPaysEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResultConfigurationUpdatesInput`<sup>Optional</sup> <a name="ResultConfigurationUpdatesInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.resultConfigurationUpdatesInput"></a>

```go
func ResultConfigurationUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `AdditionalConfiguration`<sup>Required</sup> <a name="AdditionalConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.additionalConfiguration"></a>

```go
func AdditionalConfiguration() *string
```

- *Type:* *string

---

##### `BytesScannedCutoffPerQuery`<sup>Required</sup> <a name="BytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.bytesScannedCutoffPerQuery"></a>

```go
func BytesScannedCutoffPerQuery() *f64
```

- *Type:* *f64

---

##### `EnforceWorkGroupConfiguration`<sup>Required</sup> <a name="EnforceWorkGroupConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.enforceWorkGroupConfiguration"></a>

```go
func EnforceWorkGroupConfiguration() interface{}
```

- *Type:* interface{}

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `PublishCloudwatchMetricsEnabled`<sup>Required</sup> <a name="PublishCloudwatchMetricsEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.publishCloudwatchMetricsEnabled"></a>

```go
func PublishCloudwatchMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RemoveBytesScannedCutoffPerQuery`<sup>Required</sup> <a name="RemoveBytesScannedCutoffPerQuery" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeBytesScannedCutoffPerQuery"></a>

```go
func RemoveBytesScannedCutoffPerQuery() interface{}
```

- *Type:* interface{}

---

##### `RemoveCustomerContentEncryptionConfiguration`<sup>Required</sup> <a name="RemoveCustomerContentEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.removeCustomerContentEncryptionConfiguration"></a>

```go
func RemoveCustomerContentEncryptionConfiguration() interface{}
```

- *Type:* interface{}

---

##### `RequesterPaysEnabled`<sup>Required</sup> <a name="RequesterPaysEnabled" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.requesterPaysEnabled"></a>

```go
func RequesterPaysEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption">ResetS3AclOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3AclOption` <a name="ResetS3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.resetS3AclOption"></a>

```go
func ResetS3AclOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput">S3AclOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption">S3AclOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3AclOptionInput`<sup>Optional</sup> <a name="S3AclOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOptionInput"></a>

```go
func S3AclOptionInput() *string
```

- *Type:* *string

---

##### `S3AclOption`<sup>Required</sup> <a name="S3AclOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.s3AclOption"></a>

```go
func S3AclOption() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption">ResetEncryptionOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionOption` <a name="ResetEncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetEncryptionOption"></a>

```go
func ResetEncryptionOption()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput">EncryptionOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionOptionInput`<sup>Optional</sup> <a name="EncryptionOptionInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOptionInput"></a>

```go
func EncryptionOptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.encryptionOption"></a>

```go
func EncryptionOption() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference <a name="AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/athenaworkgroup"

athenaworkgroup.NewAthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration">PutAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration">ResetAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration">ResetRemoveAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration">ResetRemoveEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner">ResetRemoveExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation">ResetRemoveOutputLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAclConfiguration` <a name="PutAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration"></a>

```go
func PutAclConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putAclConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfiguration</a>

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfiguration</a>

---

##### `ResetAclConfiguration` <a name="ResetAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetAclConfiguration"></a>

```go
func ResetAclConfiguration()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetExpectedBucketOwner"></a>

```go
func ResetExpectedBucketOwner()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetOutputLocation"></a>

```go
func ResetOutputLocation()
```

##### `ResetRemoveAclConfiguration` <a name="ResetRemoveAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveAclConfiguration"></a>

```go
func ResetRemoveAclConfiguration()
```

##### `ResetRemoveEncryptionConfiguration` <a name="ResetRemoveEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveEncryptionConfiguration"></a>

```go
func ResetRemoveEncryptionConfiguration()
```

##### `ResetRemoveExpectedBucketOwner` <a name="ResetRemoveExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveExpectedBucketOwner"></a>

```go
func ResetRemoveExpectedBucketOwner()
```

##### `ResetRemoveOutputLocation` <a name="ResetRemoveOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.resetRemoveOutputLocation"></a>

```go
func ResetRemoveOutputLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration">AclConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput">AclConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput">OutputLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput">RemoveAclConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput">RemoveEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput">RemoveExpectedBucketOwnerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput">RemoveOutputLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation">OutputLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration">RemoveAclConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration">RemoveEncryptionConfiguration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner">RemoveExpectedBucketOwner</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation">RemoveOutputLocation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AclConfiguration`<sup>Required</sup> <a name="AclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfiguration"></a>

```go
func AclConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesAclConfigurationOutputReference</a>

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference">AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesEncryptionConfigurationOutputReference</a>

---

##### `AclConfigurationInput`<sup>Optional</sup> <a name="AclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.aclConfigurationInput"></a>

```go
func AclConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwnerInput"></a>

```go
func ExpectedBucketOwnerInput() *string
```

- *Type:* *string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocationInput"></a>

```go
func OutputLocationInput() *string
```

- *Type:* *string

---

##### `RemoveAclConfigurationInput`<sup>Optional</sup> <a name="RemoveAclConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfigurationInput"></a>

```go
func RemoveAclConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveEncryptionConfigurationInput`<sup>Optional</sup> <a name="RemoveEncryptionConfigurationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfigurationInput"></a>

```go
func RemoveEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveExpectedBucketOwnerInput`<sup>Optional</sup> <a name="RemoveExpectedBucketOwnerInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwnerInput"></a>

```go
func RemoveExpectedBucketOwnerInput() interface{}
```

- *Type:* interface{}

---

##### `RemoveOutputLocationInput`<sup>Optional</sup> <a name="RemoveOutputLocationInput" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocationInput"></a>

```go
func RemoveOutputLocationInput() interface{}
```

- *Type:* interface{}

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.expectedBucketOwner"></a>

```go
func ExpectedBucketOwner() *string
```

- *Type:* *string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.outputLocation"></a>

```go
func OutputLocation() *string
```

- *Type:* *string

---

##### `RemoveAclConfiguration`<sup>Required</sup> <a name="RemoveAclConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeAclConfiguration"></a>

```go
func RemoveAclConfiguration() interface{}
```

- *Type:* interface{}

---

##### `RemoveEncryptionConfiguration`<sup>Required</sup> <a name="RemoveEncryptionConfiguration" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeEncryptionConfiguration"></a>

```go
func RemoveEncryptionConfiguration() interface{}
```

- *Type:* interface{}

---

##### `RemoveExpectedBucketOwner`<sup>Required</sup> <a name="RemoveExpectedBucketOwner" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeExpectedBucketOwner"></a>

```go
func RemoveExpectedBucketOwner() interface{}
```

- *Type:* interface{}

---

##### `RemoveOutputLocation`<sup>Required</sup> <a name="RemoveOutputLocation" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.removeOutputLocation"></a>

```go
func RemoveOutputLocation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.athenaWorkGroup.AthenaWorkGroupWorkGroupConfigurationUpdatesResultConfigurationUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



