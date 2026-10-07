# `dataAwsccApplicationsignalsInstrumentationConfig` Submodule <a name="`dataAwsccApplicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApplicationsignalsInstrumentationConfig <a name="DataAwsccApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfig(scope Construct, id *string, config DataAwsccApplicationsignalsInstrumentationConfigConfig) DataAwsccApplicationsignalsInstrumentationConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig">DataAwsccApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApplicationsignalsInstrumentationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters">AttributeFilters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt">ExpiresAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType">InstrumentationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash">LocationHash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType">SignalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```go
func AttributeFilters() StringMapList
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMapList

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```go
func CaptureConfiguration() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```go
func ExpiresAt() *string
```

- *Type:* *string

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```go
func InstrumentationType() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.location"></a>

```go
func Location() DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `LocationHash`<sup>Required</sup> <a name="LocationHash" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```go
func LocationHash() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.signalType"></a>

```go
func SignalType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tags"></a>

```go
func Tags() DataAwsccApplicationsignalsInstrumentationConfigTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList">DataAwsccApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration {

}
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {

}
```


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {

}
```


### DataAwsccApplicationsignalsInstrumentationConfigConfig <a name="DataAwsccApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/applicationsignals_instrumentation_config#id DataAwsccApplicationsignalsInstrumentationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApplicationsignalsInstrumentationConfigLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigLocation {

}
```


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation {

}
```


### DataAwsccApplicationsignalsInstrumentationConfigTags <a name="DataAwsccApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

&dataawsccapplicationsignalsinstrumentationconfig.DataAwsccApplicationsignalsInstrumentationConfigTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">MaxHits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">MaxStackFrames</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">MaxStringLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxCollectionDepth`<sup>Required</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```go
func MaxCollectionDepth() *f64
```

- *Type:* *f64

---

##### `MaxCollectionWidth`<sup>Required</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```go
func MaxCollectionWidth() *f64
```

- *Type:* *f64

---

##### `MaxFieldsPerObject`<sup>Required</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```go
func MaxFieldsPerObject() *f64
```

- *Type:* *f64

---

##### `MaxHits`<sup>Required</sup> <a name="MaxHits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```go
func MaxHits() *f64
```

- *Type:* *f64

---

##### `MaxObjectDepth`<sup>Required</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```go
func MaxObjectDepth() *f64
```

- *Type:* *f64

---

##### `MaxStackFrames`<sup>Required</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```go
func MaxStackFrames() *f64
```

- *Type:* *f64

---

##### `MaxStackTraceSize`<sup>Required</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```go
func MaxStackTraceSize() *f64
```

- *Type:* *f64

---

##### `MaxStringLength`<sup>Required</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```go
func MaxStringLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">CaptureArguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">CaptureLocals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">CaptureReturn</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">CaptureStackTrace</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaptureArguments`<sup>Required</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```go
func CaptureArguments() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```go
func CaptureLimits() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `CaptureLocals`<sup>Required</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```go
func CaptureLocals() *[]*string
```

- *Type:* *[]*string

---

##### `CaptureReturn`<sup>Required</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```go
func CaptureReturn() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `CaptureStackTrace`<sup>Required</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```go
func CaptureStackTrace() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```go
func CodeCapture() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration">DataAwsccApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">ClassName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">CodeUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">FilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">LineNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">MethodName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```go
func ClassName() *string
```

- *Type:* *string

---

##### `CodeUnit`<sup>Required</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```go
func CodeUnit() *string
```

- *Type:* *string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```go
func FilePath() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `LineNumber`<sup>Required</sup> <a name="LineNumber" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```go
func LineNumber() *f64
```

- *Type:* *f64

---

##### `MethodName`<sup>Required</sup> <a name="MethodName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```go
func MethodName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```go
func CodeLocation() DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">DataAwsccApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigLocation">DataAwsccApplicationsignalsInstrumentationConfigLocation</a>

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsList <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApplicationsignalsInstrumentationConfigTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get"></a>

```go
func Get(index *f64) DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference <a name="DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapplicationsignalsinstrumentationconfig"

dataawsccapplicationsignalsinstrumentationconfig.NewDataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApplicationsignalsInstrumentationConfigTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApplicationsignalsInstrumentationConfig.DataAwsccApplicationsignalsInstrumentationConfigTags">DataAwsccApplicationsignalsInstrumentationConfigTags</a>

---



