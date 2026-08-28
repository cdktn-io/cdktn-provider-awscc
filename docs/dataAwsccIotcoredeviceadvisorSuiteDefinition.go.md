# `dataAwsccIotcoredeviceadvisorSuiteDefinition` Submodule <a name="`dataAwsccIotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinition <a name="DataAwsccIotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinition(scope Construct, id *string, config DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig) DataAwsccIotcoredeviceadvisorSuiteDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig">DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig">DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotcoredeviceadvisorSuiteDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">SuiteDefinitionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">SuiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">SuiteDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">SuiteDefinitionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList">DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `SuiteDefinitionArn`<sup>Required</sup> <a name="SuiteDefinitionArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```go
func SuiteDefinitionArn() *string
```

- *Type:* *string

---

##### `SuiteDefinitionConfiguration`<sup>Required</sup> <a name="SuiteDefinitionConfiguration" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```go
func SuiteDefinitionConfiguration() DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `SuiteDefinitionId`<sup>Required</sup> <a name="SuiteDefinitionId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```go
func SuiteDefinitionId() *string
```

- *Type:* *string

---

##### `SuiteDefinitionVersion`<sup>Required</sup> <a name="SuiteDefinitionVersion" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```go
func SuiteDefinitionVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```go
func Tags() DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList">DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

&dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#id DataAwsccIotcoredeviceadvisorSuiteDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

&dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration {

}
```


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

&dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices {

}
```


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTags <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

&dataawscciotcoredeviceadvisorsuitedefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```go
func Get(index *f64) DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">ThingArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `ThingArn`<sup>Required</sup> <a name="ThingArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```go
func ThingArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">DevicePermissionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">Devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">IntendedForQualification</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">RootGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">SuiteDefinitionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DevicePermissionRoleArn`<sup>Required</sup> <a name="DevicePermissionRoleArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```go
func DevicePermissionRoleArn() *string
```

- *Type:* *string

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```go
func Devices() DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `IntendedForQualification`<sup>Required</sup> <a name="IntendedForQualification" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```go
func IntendedForQualification() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RootGroup`<sup>Required</sup> <a name="RootGroup" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```go
func RootGroup() *string
```

- *Type:* *string

---

##### `SuiteDefinitionName`<sup>Required</sup> <a name="SuiteDefinitionName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```go
func SuiteDefinitionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotcoredeviceadvisorsuitedefinition"

dataawscciotcoredeviceadvisorsuitedefinition.NewDataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags">DataAwsccIotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotcoredeviceadvisorSuiteDefinitionTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags">DataAwsccIotcoredeviceadvisorSuiteDefinitionTags</a>

---



