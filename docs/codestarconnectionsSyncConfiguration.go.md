# `codestarconnectionsSyncConfiguration` Submodule <a name="`codestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsSyncConfiguration <a name="CodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

codestarconnectionssyncconfiguration.NewCodestarconnectionsSyncConfiguration(scope Construct, id *string, config CodestarconnectionsSyncConfigurationConfig) CodestarconnectionsSyncConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus">ResetPublishDeploymentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn">ResetTriggerResourceUpdateOn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPublishDeploymentStatus` <a name="ResetPublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus"></a>

```go
func ResetPublishDeploymentStatus()
```

##### `ResetTriggerResourceUpdateOn` <a name="ResetTriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn"></a>

```go
func ResetTriggerResourceUpdateOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

codestarconnectionssyncconfiguration.CodestarconnectionsSyncConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

codestarconnectionssyncconfiguration.CodestarconnectionsSyncConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

codestarconnectionssyncconfiguration.CodestarconnectionsSyncConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

codestarconnectionssyncconfiguration.CodestarconnectionsSyncConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CodestarconnectionsSyncConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput">ConfigFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput">PublishDeploymentStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput">RepositoryLinkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput">SyncTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput">TriggerResourceUpdateOnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile">ConfigFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">PublishDeploymentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType">SyncType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">TriggerResourceUpdateOn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput"></a>

```go
func ConfigFileInput() *string
```

- *Type:* *string

---

##### `PublishDeploymentStatusInput`<sup>Optional</sup> <a name="PublishDeploymentStatusInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput"></a>

```go
func PublishDeploymentStatusInput() *string
```

- *Type:* *string

---

##### `RepositoryLinkIdInput`<sup>Optional</sup> <a name="RepositoryLinkIdInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput"></a>

```go
func RepositoryLinkIdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SyncTypeInput`<sup>Optional</sup> <a name="SyncTypeInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput"></a>

```go
func SyncTypeInput() *string
```

- *Type:* *string

---

##### `TriggerResourceUpdateOnInput`<sup>Optional</sup> <a name="TriggerResourceUpdateOnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput"></a>

```go
func TriggerResourceUpdateOnInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile"></a>

```go
func ConfigFile() *string
```

- *Type:* *string

---

##### `PublishDeploymentStatus`<sup>Required</sup> <a name="PublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```go
func PublishDeploymentStatus() *string
```

- *Type:* *string

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```go
func RepositoryLinkId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType"></a>

```go
func SyncType() *string
```

- *Type:* *string

---

##### `TriggerResourceUpdateOn`<sup>Required</sup> <a name="TriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```go
func TriggerResourceUpdateOn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsSyncConfigurationConfig <a name="CodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/codestarconnectionssyncconfiguration"

&codestarconnectionssyncconfiguration.CodestarconnectionsSyncConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Branch: *string,
	ConfigFile: *string,
	RepositoryLinkId: *string,
	ResourceName: *string,
	RoleArn: *string,
	SyncType: *string,
	PublishDeploymentStatus: *string,
	TriggerResourceUpdateOn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch">Branch</a></code> | <code>*string</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile">ConfigFile</a></code> | <code>*string</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>*string</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName">ResourceName</a></code> | <code>*string</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType">SyncType</a></code> | <code>*string</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus">PublishDeploymentStatus</a></code> | <code>*string</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn">TriggerResourceUpdateOn</a></code> | <code>*string</code> | When to trigger Git sync to begin the stack update. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile"></a>

```go
ConfigFile *string
```

- *Type:* *string

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId"></a>

```go
RepositoryLinkId *string
```

- *Type:* *string

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType"></a>

```go
SyncType *string
```

- *Type:* *string

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `PublishDeploymentStatus`<sup>Optional</sup> <a name="PublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus"></a>

```go
PublishDeploymentStatus *string
```

- *Type:* *string

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `TriggerResourceUpdateOn`<sup>Optional</sup> <a name="TriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn"></a>

```go
TriggerResourceUpdateOn *string
```

- *Type:* *string

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---



