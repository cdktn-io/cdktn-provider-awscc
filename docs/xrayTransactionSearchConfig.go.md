# `xrayTransactionSearchConfig` Submodule <a name="`xrayTransactionSearchConfig` Submodule" id="@cdktn/provider-awscc.xrayTransactionSearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayTransactionSearchConfig <a name="XrayTransactionSearchConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.NewXrayTransactionSearchConfig(scope Construct, id *string, config XrayTransactionSearchConfigConfig) XrayTransactionSearchConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig">XrayTransactionSearchConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig">XrayTransactionSearchConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration">PutCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration">ResetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage">ResetIndexingPercentage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudwatchLogsConfiguration` <a name="PutCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration"></a>

```go
func PutCloudwatchLogsConfiguration(value XrayTransactionSearchConfigCloudwatchLogsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---

##### `ResetCloudwatchLogsConfiguration` <a name="ResetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration"></a>

```go
func ResetCloudwatchLogsConfiguration()
```

##### `ResetIndexingPercentage` <a name="ResetIndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage"></a>

```go
func ResetIndexingPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.XrayTransactionSearchConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.XrayTransactionSearchConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.XrayTransactionSearchConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.XrayTransactionSearchConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the XrayTransactionSearchConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing XrayTransactionSearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the XrayTransactionSearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput">CloudwatchLogsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput">IndexingPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage">IndexingPercentage</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration"></a>

```go
func CloudwatchLogsConfiguration() XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput"></a>

```go
func CloudwatchLogsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `IndexingPercentageInput`<sup>Optional</sup> <a name="IndexingPercentageInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput"></a>

```go
func IndexingPercentageInput() *f64
```

- *Type:* *f64

---

##### `IndexingPercentage`<sup>Required</sup> <a name="IndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage"></a>

```go
func IndexingPercentage() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfiguration <a name="XrayTransactionSearchConfigCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

&xraytransactionsearchconfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration {
	SpansLogGroupKmsKeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId">SpansLogGroupKmsKeyId</a></code> | <code>*string</code> | The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group. |

---

##### `SpansLogGroupKmsKeyId`<sup>Optional</sup> <a name="SpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId"></a>

```go
SpansLogGroupKmsKeyId *string
```

- *Type:* *string

The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group.

Key IDs and alias ARNs are not supported, so for an AWS::KMS::Key use Fn::GetAtt Arn, not Ref. X-Ray applies the key only when it creates aws/spans while enabling Transaction Search. If aws/spans already exists, for example from an earlier enablement or an earlier create that failed partway, the create fails and X-Ray does not enable Transaction Search or change the log group. Remove this property to use the existing log group with its current encryption, and use the CloudWatch Logs AssociateKmsKey API to change its key. The caller needs kms:DescribeKey on the key, and the key policy must allow CloudWatch Logs to use it. Adding, changing or removing this property replaces the resource, which fails while Transaction Search is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#spans_log_group_kms_key_id XrayTransactionSearchConfig#spans_log_group_kms_key_id}

---

### XrayTransactionSearchConfigConfig <a name="XrayTransactionSearchConfigConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

&xraytransactionsearchconfig.XrayTransactionSearchConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CloudwatchLogsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration,
	IndexingPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage">IndexingPercentage</a></code> | <code>*f64</code> | Determines the percentage of traces indexed from CloudWatch Logs to X-Ray. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudwatchLogsConfiguration`<sup>Optional</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration"></a>

```go
CloudwatchLogsConfiguration XrayTransactionSearchConfigCloudwatchLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search.

It is used only at that time and is never returned

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#cloudwatch_logs_configuration XrayTransactionSearchConfig#cloudwatch_logs_configuration}

---

##### `IndexingPercentage`<sup>Optional</sup> <a name="IndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage"></a>

```go
IndexingPercentage *f64
```

- *Type:* *f64

Determines the percentage of traces indexed from CloudWatch Logs to X-Ray.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#indexing_percentage XrayTransactionSearchConfig#indexing_percentage}

---

## Classes <a name="Classes" id="Classes"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference <a name="XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/xraytransactionsearchconfig"

xraytransactionsearchconfig.NewXrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId">ResetSpansLogGroupKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpansLogGroupKmsKeyId` <a name="ResetSpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId"></a>

```go
func ResetSpansLogGroupKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput">SpansLogGroupKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId">SpansLogGroupKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpansLogGroupKmsKeyIdInput`<sup>Optional</sup> <a name="SpansLogGroupKmsKeyIdInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput"></a>

```go
func SpansLogGroupKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SpansLogGroupKmsKeyId`<sup>Required</sup> <a name="SpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId"></a>

```go
func SpansLogGroupKmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



