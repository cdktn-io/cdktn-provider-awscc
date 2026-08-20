# `dataAwsccInspectorv2CodeSecurityScanConfiguration` Submodule <a name="`dataAwsccInspectorv2CodeSecurityScanConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CodeSecurityScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_code_security_scan_configuration awscc_inspectorv2_code_security_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.NewDataAwsccInspectorv2CodeSecurityScanConfiguration(scope Construct, id *string, config DataAwsccInspectorv2CodeSecurityScanConfigurationConfig) DataAwsccInspectorv2CodeSecurityScanConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig">DataAwsccInspectorv2CodeSecurityScanConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig">DataAwsccInspectorv2CodeSecurityScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityScanConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccInspectorv2CodeSecurityScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_code_security_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.scopeSettings">ScopeSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.configuration"></a>

```go
func Configuration() DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference</a>

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScopeSettings`<sup>Required</sup> <a name="ScopeSettings" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.scopeSettings"></a>

```go
func ScopeSettings() DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfig <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

&dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_code_security_scan_configuration#id DataAwsccInspectorv2CodeSecurityScanConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

&dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration {

}
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

&dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration {

}
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

&dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration {

}
```


### DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

&dataawsccinspectorv2codesecurityscanconfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.NewDataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.supportedEvents"></a>

```go
func SupportedEvents() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.NewDataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration">ContinuousIntegrationScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration">PeriodicScanConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories">RuleSetCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinuousIntegrationScanConfiguration`<sup>Required</sup> <a name="ContinuousIntegrationScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.continuousIntegrationScanConfiguration"></a>

```go
func ContinuousIntegrationScanConfiguration() DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationContinuousIntegrationScanConfigurationOutputReference</a>

---

##### `PeriodicScanConfiguration`<sup>Required</sup> <a name="PeriodicScanConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.periodicScanConfiguration"></a>

```go
func PeriodicScanConfiguration() DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference</a>

---

##### `RuleSetCategories`<sup>Required</sup> <a name="RuleSetCategories" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.ruleSetCategories"></a>

```go
func RuleSetCategories() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.NewDataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression">FrequencyExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `FrequencyExpression`<sup>Required</sup> <a name="FrequencyExpression" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.frequencyExpression"></a>

```go
func FrequencyExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration">DataAwsccInspectorv2CodeSecurityScanConfigurationConfigurationPeriodicScanConfiguration</a>

---


### DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference <a name="DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityscanconfiguration"

dataawsccinspectorv2codesecurityscanconfiguration.NewDataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope">ProjectSelectionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectSelectionScope`<sup>Required</sup> <a name="ProjectSelectionScope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.projectSelectionScope"></a>

```go
func ProjectSelectionScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityScanConfiguration.DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings">DataAwsccInspectorv2CodeSecurityScanConfigurationScopeSettings</a>

---



