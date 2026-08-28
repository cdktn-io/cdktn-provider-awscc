# `apsWorkspace` Submodule <a name="`apsWorkspace` Submodule" id="@cdktn/provider-awscc.apsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsWorkspace <a name="ApsWorkspace" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace awscc_aps_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspace(scope Construct, id *string, config ApsWorkspaceConfig) ApsWorkspace
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig">ApsWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig">ApsWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration">PutQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration">PutWorkspaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition">ResetAlertManagerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration">ResetQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration">ResetWorkspaceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value ApsWorkspaceLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---

##### `PutQueryLoggingConfiguration` <a name="PutQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration"></a>

```go
func PutQueryLoggingConfiguration(value ApsWorkspaceQueryLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkspaceConfiguration` <a name="PutWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration"></a>

```go
func PutWorkspaceConfiguration(value ApsWorkspaceWorkspaceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---

##### `ResetAlertManagerDefinition` <a name="ResetAlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition"></a>

```go
func ResetAlertManagerDefinition()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration"></a>

```go
func ResetLoggingConfiguration()
```

##### `ResetQueryLoggingConfiguration` <a name="ResetQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration"></a>

```go
func ResetQueryLoggingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkspaceConfiguration` <a name="ResetWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration"></a>

```go
func ResetWorkspaceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.ApsWorkspace_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.ApsWorkspace_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.ApsWorkspace_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.ApsWorkspace_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApsWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint">PrometheusEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration">QueryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration">WorkspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput">AlertManagerDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput">QueryLoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput">WorkspaceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition">AlertManagerDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() ApsWorkspaceLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a>

---

##### `PrometheusEndpoint`<sup>Required</sup> <a name="PrometheusEndpoint" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint"></a>

```go
func PrometheusEndpoint() *string
```

- *Type:* *string

---

##### `QueryLoggingConfiguration`<sup>Required</sup> <a name="QueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration"></a>

```go
func QueryLoggingConfiguration() ApsWorkspaceQueryLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags"></a>

```go
func Tags() ApsWorkspaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a>

---

##### `WorkspaceConfiguration`<sup>Required</sup> <a name="WorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration"></a>

```go
func WorkspaceConfiguration() ApsWorkspaceWorkspaceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `AlertManagerDefinitionInput`<sup>Optional</sup> <a name="AlertManagerDefinitionInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput"></a>

```go
func AlertManagerDefinitionInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `QueryLoggingConfigurationInput`<sup>Optional</sup> <a name="QueryLoggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput"></a>

```go
func QueryLoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceConfigurationInput`<sup>Optional</sup> <a name="WorkspaceConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput"></a>

```go
func WorkspaceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AlertManagerDefinition`<sup>Required</sup> <a name="AlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition"></a>

```go
func AlertManagerDefinition() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsWorkspaceConfig <a name="ApsWorkspaceConfig" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AlertManagerDefinition: *string,
	Alias: *string,
	KmsKeyArn: *string,
	LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration,
	QueryLoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration,
	Tags: interface{},
	WorkspaceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition">AlertManagerDefinition</a></code> | <code>*string</code> | The AMP Workspace alert manager definition data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias">Alias</a></code> | <code>*string</code> | AMP Workspace alias. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS Key ARN used to encrypt and decrypt AMP workspace data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | Logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration">QueryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | Query logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration">WorkspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | Workspace configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertManagerDefinition`<sup>Optional</sup> <a name="AlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition"></a>

```go
AlertManagerDefinition *string
```

- *Type:* *string

The AMP Workspace alert manager definition data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#alert_manager_definition ApsWorkspace#alert_manager_definition}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

AMP Workspace alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#alias ApsWorkspace#alias}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS Key ARN used to encrypt and decrypt AMP workspace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#kms_key_arn ApsWorkspace#kms_key_arn}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration ApsWorkspaceLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

Logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#logging_configuration ApsWorkspace#logging_configuration}

---

##### `QueryLoggingConfiguration`<sup>Optional</sup> <a name="QueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration"></a>

```go
QueryLoggingConfiguration ApsWorkspaceQueryLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

Query logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#query_logging_configuration ApsWorkspace#query_logging_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#tags ApsWorkspace#tags}

---

##### `WorkspaceConfiguration`<sup>Optional</sup> <a name="WorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration"></a>

```go
WorkspaceConfiguration ApsWorkspaceWorkspaceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

Workspace configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#workspace_configuration ApsWorkspace#workspace_configuration}

---

### ApsWorkspaceLoggingConfiguration <a name="ApsWorkspaceLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceLoggingConfiguration {
	LogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | CloudWatch log group ARN. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

CloudWatch log group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfiguration <a name="ApsWorkspaceQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceQueryLoggingConfiguration {
	Destinations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations">Destinations</a></code> | <code>interface{}</code> | The destinations configuration for query logging. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

The destinations configuration for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#destinations ApsWorkspace#destinations}

---

### ApsWorkspaceQueryLoggingConfigurationDestinations <a name="ApsWorkspaceQueryLoggingConfigurationDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceQueryLoggingConfigurationDestinations {
	CloudwatchLogs: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs,
	Filters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for query logging. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | Filters for logging. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs"></a>

```go
CloudwatchLogs ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

Represents a cloudwatch logs destination for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#cloudwatch_logs ApsWorkspace#cloudwatch_logs}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters"></a>

```go
Filters ApsWorkspaceQueryLoggingConfigurationDestinationsFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

Filters for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#filters ApsWorkspace#filters}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs {
	LogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | The ARN of the CloudWatch Logs log group. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

The ARN of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsFilters <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters {
	QspThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold">QspThreshold</a></code> | <code>*f64</code> | Query logs with QSP above this limit are vended. |

---

##### `QspThreshold`<sup>Optional</sup> <a name="QspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold"></a>

```go
QspThreshold *f64
```

- *Type:* *f64

Query logs with QSP above this limit are vended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#qsp_threshold ApsWorkspace#qsp_threshold}

---

### ApsWorkspaceTags <a name="ApsWorkspaceTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#key ApsWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfiguration <a name="ApsWorkspaceWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceWorkspaceConfiguration {
	LimitsPerLabelSets: interface{},
	OutOfOrderTimeWindowInSeconds: *f64,
	RetentionPeriodInDays: *f64,
	RuleQueryOffsetInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets">LimitsPerLabelSets</a></code> | <code>interface{}</code> | An array of label set and associated limits. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds">OutOfOrderTimeWindowInSeconds</a></code> | <code>*f64</code> | The time window in seconds for accepting out-of-order samples. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | How many days that metrics are retained in the workspace. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds">RuleQueryOffsetInSeconds</a></code> | <code>*f64</code> | Duration in seconds to offset rule evaluation queries into the past. |

---

##### `LimitsPerLabelSets`<sup>Optional</sup> <a name="LimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets"></a>

```go
LimitsPerLabelSets interface{}
```

- *Type:* interface{}

An array of label set and associated limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#limits_per_label_sets ApsWorkspace#limits_per_label_sets}

---

##### `OutOfOrderTimeWindowInSeconds`<sup>Optional</sup> <a name="OutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds"></a>

```go
OutOfOrderTimeWindowInSeconds *f64
```

- *Type:* *f64

The time window in seconds for accepting out-of-order samples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#out_of_order_time_window_in_seconds ApsWorkspace#out_of_order_time_window_in_seconds}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays"></a>

```go
RetentionPeriodInDays *f64
```

- *Type:* *f64

How many days that metrics are retained in the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#retention_period_in_days ApsWorkspace#retention_period_in_days}

---

##### `RuleQueryOffsetInSeconds`<sup>Optional</sup> <a name="RuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds"></a>

```go
RuleQueryOffsetInSeconds *f64
```

- *Type:* *f64

Duration in seconds to offset rule evaluation queries into the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#rule_query_offset_in_seconds ApsWorkspace#rule_query_offset_in_seconds}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets {
	LabelSet: interface{},
	Limits: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet">LabelSet</a></code> | <code>interface{}</code> | An array of series labels. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | Limits that can be applied to a label set. |

---

##### `LabelSet`<sup>Optional</sup> <a name="LabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet"></a>

```go
LabelSet interface{}
```

- *Type:* interface{}

An array of series labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#label_set ApsWorkspace#label_set}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits"></a>

```go
Limits ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

Limits that can be applied to a label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#limits ApsWorkspace#limits}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name">Name</a></code> | <code>*string</code> | Name of the label. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value">Value</a></code> | <code>*string</code> | Value of the label. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#name ApsWorkspace#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

&apsworkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits {
	MaxSeries: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries">MaxSeries</a></code> | <code>*f64</code> | The maximum number of active series that can be ingested for this label set. |

---

##### `MaxSeries`<sup>Optional</sup> <a name="MaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries"></a>

```go
MaxSeries *f64
```

- *Type:* *f64

The maximum number of active series that can be ingested for this label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/aps_workspace#max_series ApsWorkspace#max_series}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsWorkspaceLoggingConfigurationOutputReference <a name="ApsWorkspaceLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold">ResetQspThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQspThreshold` <a name="ResetQspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold"></a>

```go
func ResetQspThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput">QspThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold">QspThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QspThresholdInput`<sup>Optional</sup> <a name="QspThresholdInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput"></a>

```go
func QspThresholdInput() *f64
```

- *Type:* *f64

---

##### `QspThreshold`<sup>Required</sup> <a name="QspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold"></a>

```go
func QspThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsList <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceQueryLoggingConfigurationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsWorkspaceQueryLoggingConfigurationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get"></a>

```go
func Get(index *f64) ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs"></a>

```go
func PutCloudwatchLogs(value ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters"></a>

```go
func PutFilters(value ApsWorkspaceQueryLoggingConfigurationDestinationsFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs"></a>

```go
func ResetCloudwatchLogs()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters"></a>

```go
func ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs"></a>

```go
func CloudwatchLogs() ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters"></a>

```go
func Filters() ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput"></a>

```go
func CloudwatchLogsInput() interface{}
```

- *Type:* interface{}

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceQueryLoggingConfigurationOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceQueryLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceQueryLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations"></a>

```go
func Destinations() ApsWorkspaceQueryLoggingConfigurationDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceTagsList <a name="ApsWorkspaceTagsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsWorkspaceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get"></a>

```go
func Get(index *f64) ApsWorkspaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceTagsOutputReference <a name="ApsWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsWorkspaceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get"></a>

```go
func Get(index *f64) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries">ResetMaxSeries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSeries` <a name="ResetMaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries"></a>

```go
func ResetMaxSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput">MaxSeriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries">MaxSeries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSeriesInput`<sup>Optional</sup> <a name="MaxSeriesInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput"></a>

```go
func MaxSeriesInput() *f64
```

- *Type:* *f64

---

##### `MaxSeries`<sup>Required</sup> <a name="MaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries"></a>

```go
func MaxSeries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get"></a>

```go
func Get(index *f64) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet">PutLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet">ResetLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSet` <a name="PutLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet"></a>

```go
func PutLabelSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits"></a>

```go
func PutLimits(value ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---

##### `ResetLabelSet` <a name="ResetLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet"></a>

```go
func ResetLabelSet()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet">LabelSet</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput">LabelSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput">LimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet"></a>

```go
func LabelSet() ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits"></a>

```go
func Limits() ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a>

---

##### `LabelSetInput`<sup>Optional</sup> <a name="LabelSetInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput"></a>

```go
func LabelSetInput() interface{}
```

- *Type:* interface{}

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput"></a>

```go
func LimitsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApsWorkspaceWorkspaceConfigurationOutputReference <a name="ApsWorkspaceWorkspaceConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apsworkspace"

apsworkspace.NewApsWorkspaceWorkspaceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApsWorkspaceWorkspaceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets">PutLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets">ResetLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds">ResetOutOfOrderTimeWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays">ResetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds">ResetRuleQueryOffsetInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimitsPerLabelSets` <a name="PutLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets"></a>

```go
func PutLimitsPerLabelSets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLimitsPerLabelSets` <a name="ResetLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets"></a>

```go
func ResetLimitsPerLabelSets()
```

##### `ResetOutOfOrderTimeWindowInSeconds` <a name="ResetOutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds"></a>

```go
func ResetOutOfOrderTimeWindowInSeconds()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays"></a>

```go
func ResetRetentionPeriodInDays()
```

##### `ResetRuleQueryOffsetInSeconds` <a name="ResetRuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds"></a>

```go
func ResetRuleQueryOffsetInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets">LimitsPerLabelSets</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput">LimitsPerLabelSetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput">OutOfOrderTimeWindowInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput">RuleQueryOffsetInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds">OutOfOrderTimeWindowInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds">RuleQueryOffsetInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsPerLabelSets`<sup>Required</sup> <a name="LimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets"></a>

```go
func LimitsPerLabelSets() ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a>

---

##### `LimitsPerLabelSetsInput`<sup>Optional</sup> <a name="LimitsPerLabelSetsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput"></a>

```go
func LimitsPerLabelSetsInput() interface{}
```

- *Type:* interface{}

---

##### `OutOfOrderTimeWindowInSecondsInput`<sup>Optional</sup> <a name="OutOfOrderTimeWindowInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput"></a>

```go
func OutOfOrderTimeWindowInSecondsInput() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput"></a>

```go
func RetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `RuleQueryOffsetInSecondsInput`<sup>Optional</sup> <a name="RuleQueryOffsetInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput"></a>

```go
func RuleQueryOffsetInSecondsInput() *f64
```

- *Type:* *f64

---

##### `OutOfOrderTimeWindowInSeconds`<sup>Required</sup> <a name="OutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds"></a>

```go
func OutOfOrderTimeWindowInSeconds() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `RuleQueryOffsetInSeconds`<sup>Required</sup> <a name="RuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds"></a>

```go
func RuleQueryOffsetInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



