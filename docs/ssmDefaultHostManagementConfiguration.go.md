# `ssmDefaultHostManagementConfiguration` Submodule <a name="`ssmDefaultHostManagementConfiguration` Submodule" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmDefaultHostManagementConfiguration <a name="SsmDefaultHostManagementConfiguration" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration awscc_ssm_default_host_management_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

ssmdefaulthostmanagementconfiguration.NewSsmDefaultHostManagementConfiguration(scope Construct, id *string, config SsmDefaultHostManagementConfigurationConfig) SsmDefaultHostManagementConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig">SsmDefaultHostManagementConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn">ResetCustomerManagedRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomerManagedRoleArn` <a name="ResetCustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.resetCustomerManagedRoleArn"></a>

```go
func ResetCustomerManagedRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

ssmdefaulthostmanagementconfiguration.SsmDefaultHostManagementConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

ssmdefaulthostmanagementconfiguration.SsmDefaultHostManagementConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

ssmdefaulthostmanagementconfiguration.SsmDefaultHostManagementConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

ssmdefaulthostmanagementconfiguration.SsmDefaultHostManagementConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmDefaultHostManagementConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmDefaultHostManagementConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmDefaultHostManagementConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmDefaultHostManagementConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate">LastModifiedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser">LastModifiedUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn">SettingArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId">SettingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput">CustomerManagedRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput">PermissionModelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn">CustomerManagedRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel">PermissionModel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedDate`<sup>Required</sup> <a name="LastModifiedDate" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedDate"></a>

```go
func LastModifiedDate() *string
```

- *Type:* *string

---

##### `LastModifiedUser`<sup>Required</sup> <a name="LastModifiedUser" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.lastModifiedUser"></a>

```go
func LastModifiedUser() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SettingArn`<sup>Required</sup> <a name="SettingArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingArn"></a>

```go
func SettingArn() *string
```

- *Type:* *string

---

##### `SettingId`<sup>Required</sup> <a name="SettingId" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.settingId"></a>

```go
func SettingId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CustomerManagedRoleArnInput`<sup>Optional</sup> <a name="CustomerManagedRoleArnInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArnInput"></a>

```go
func CustomerManagedRoleArnInput() *string
```

- *Type:* *string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModelInput"></a>

```go
func PermissionModelInput() *string
```

- *Type:* *string

---

##### `CustomerManagedRoleArn`<sup>Required</sup> <a name="CustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.customerManagedRoleArn"></a>

```go
func CustomerManagedRoleArn() *string
```

- *Type:* *string

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.permissionModel"></a>

```go
func PermissionModel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmDefaultHostManagementConfigurationConfig <a name="SsmDefaultHostManagementConfigurationConfig" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/ssmdefaulthostmanagementconfiguration"

&ssmdefaulthostmanagementconfiguration.SsmDefaultHostManagementConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PermissionModel: *string,
	CustomerManagedRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel">PermissionModel</a></code> | <code>*string</code> | The permission model used to enable DHMC. |
| <code><a href="#@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn">CustomerManagedRoleArn</a></code> | <code>*string</code> | The ARN of the customer-provided IAM role to register for DHMC. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.permissionModel"></a>

```go
PermissionModel *string
```

- *Type:* *string

The permission model used to enable DHMC.

SERVICE_MANAGED lets SSM create and manage the DHMC IAM role on your behalf. SELF_MANAGED registers an IAM role that you provide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#permission_model SsmDefaultHostManagementConfiguration#permission_model}

---

##### `CustomerManagedRoleArn`<sup>Optional</sup> <a name="CustomerManagedRoleArn" id="@cdktn/provider-awscc.ssmDefaultHostManagementConfiguration.SsmDefaultHostManagementConfigurationConfig.property.customerManagedRoleArn"></a>

```go
CustomerManagedRoleArn *string
```

- *Type:* *string

The ARN of the customer-provided IAM role to register for DHMC.

Required when PermissionModel is SELF_MANAGED and must not be set when PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ssm_default_host_management_configuration#customer_managed_role_arn SsmDefaultHostManagementConfiguration#customer_managed_role_arn}

---



