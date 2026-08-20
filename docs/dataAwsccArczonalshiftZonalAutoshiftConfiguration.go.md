# `dataAwsccArczonalshiftZonalAutoshiftConfiguration` Submodule <a name="`dataAwsccArczonalshiftZonalAutoshiftConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccArczonalshiftZonalAutoshiftConfiguration <a name="DataAwsccArczonalshiftZonalAutoshiftConfiguration" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration awscc_arczonalshift_zonal_autoshift_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfiguration(scope Construct, id *string, config DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig) DataAwsccArczonalshiftZonalAutoshiftConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig">DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig">DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccArczonalshiftZonalAutoshiftConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccArczonalshiftZonalAutoshiftConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccArczonalshiftZonalAutoshiftConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccArczonalshiftZonalAutoshiftConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration">PracticeRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus">ZonalAutoshiftStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PracticeRunConfiguration`<sup>Required</sup> <a name="PracticeRunConfiguration" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.practiceRunConfiguration"></a>

```go
func PracticeRunConfiguration() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference</a>

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.resourceIdentifier"></a>

```go
func ResourceIdentifier() *string
```

- *Type:* *string

---

##### `ZonalAutoshiftStatus`<sup>Required</sup> <a name="ZonalAutoshiftStatus" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.zonalAutoshiftStatus"></a>

```go
func ZonalAutoshiftStatus() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

&dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/arczonalshift_zonal_autoshift_configuration#id DataAwsccArczonalshiftZonalAutoshiftConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

&dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration {

}
```


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

&dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms {

}
```


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

&dataawsccarczonalshiftzonalautoshiftconfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get"></a>

```go
func Get(index *f64) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarms</a>

---


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get"></a>

```go
func Get(index *f64) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier">AlarmIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmIdentifier`<sup>Required</sup> <a name="AlarmIdentifier" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.alarmIdentifier"></a>

```go
func AlarmIdentifier() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarms</a>

---


### DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference <a name="DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccarczonalshiftzonalautoshiftconfiguration"

dataawsccarczonalshiftzonalautoshiftconfiguration.NewDataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates">BlockedDates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows">BlockedWindows</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms">BlockingAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms">OutcomeAlarms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockedDates`<sup>Required</sup> <a name="BlockedDates" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedDates"></a>

```go
func BlockedDates() *[]*string
```

- *Type:* *[]*string

---

##### `BlockedWindows`<sup>Required</sup> <a name="BlockedWindows" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockedWindows"></a>

```go
func BlockedWindows() *[]*string
```

- *Type:* *[]*string

---

##### `BlockingAlarms`<sup>Required</sup> <a name="BlockingAlarms" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.blockingAlarms"></a>

```go
func BlockingAlarms() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationBlockingAlarmsList</a>

---

##### `OutcomeAlarms`<sup>Required</sup> <a name="OutcomeAlarms" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.outcomeAlarms"></a>

```go
func OutcomeAlarms() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutcomeAlarmsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccArczonalshiftZonalAutoshiftConfiguration.DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration">DataAwsccArczonalshiftZonalAutoshiftConfigurationPracticeRunConfiguration</a>

---



