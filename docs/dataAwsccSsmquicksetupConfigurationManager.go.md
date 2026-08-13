# `dataAwsccSsmquicksetupConfigurationManager` Submodule <a name="`dataAwsccSsmquicksetupConfigurationManager` Submodule" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSsmquicksetupConfigurationManager <a name="DataAwsccSsmquicksetupConfigurationManager" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.NewDataAwsccSsmquicksetupConfigurationManager(scope Construct, id *string, config DataAwsccSsmquicksetupConfigurationManagerConfig) DataAwsccSsmquicksetupConfigurationManager
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig">DataAwsccSsmquicksetupConfigurationManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig">DataAwsccSsmquicksetupConfigurationManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManager_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManager_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManager_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManager_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSsmquicksetupConfigurationManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions">ConfigurationDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn">ManagerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries">StatusSummaries</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConfigurationDefinitions`<sup>Required</sup> <a name="ConfigurationDefinitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.configurationDefinitions"></a>

```go
func ConfigurationDefinitions() DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `ManagerArn`<sup>Required</sup> <a name="ManagerArn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.managerArn"></a>

```go
func ManagerArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StatusSummaries`<sup>Required</sup> <a name="StatusSummaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.statusSummaries"></a>

```go
func StatusSummaries() DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList">DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManager.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfig <a name="DataAwsccSsmquicksetupConfigurationManagerConfig" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

&dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManagerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ssmquicksetup_configuration_manager#id DataAwsccSsmquicksetupConfigurationManager#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

&dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions {

}
```


### DataAwsccSsmquicksetupConfigurationManagerStatusSummaries <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummaries" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

&dataawsccssmquicksetupconfigurationmanager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.NewDataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.NewDataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn">LocalDeploymentAdministrationRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName">LocalDeploymentExecutionRoleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion">TypeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalDeploymentAdministrationRoleArn`<sup>Required</sup> <a name="LocalDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```go
func LocalDeploymentAdministrationRoleArn() *string
```

- *Type:* *string

---

##### `LocalDeploymentExecutionRoleName`<sup>Required</sup> <a name="LocalDeploymentExecutionRoleName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName"></a>

```go
func LocalDeploymentExecutionRoleName() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `TypeVersion`<sup>Required</sup> <a name="TypeVersion" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion"></a>

```go
func TypeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions">DataAwsccSsmquicksetupConfigurationManagerConfigurationDefinitions</a>

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.NewDataAwsccSsmquicksetupConfigurationManagerStatusSummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```go
func Get(index *f64) DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccssmquicksetupconfigurationmanager"

dataawsccssmquicksetupconfigurationmanager.NewDataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails">StatusDetails</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">StatusType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails"></a>

```go
func StatusDetails() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `StatusType`<sup>Required</sup> <a name="StatusType" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```go
func StatusType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSsmquicksetupConfigurationManagerStatusSummaries
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSsmquicksetupConfigurationManager.DataAwsccSsmquicksetupConfigurationManagerStatusSummaries">DataAwsccSsmquicksetupConfigurationManagerStatusSummaries</a>

---



