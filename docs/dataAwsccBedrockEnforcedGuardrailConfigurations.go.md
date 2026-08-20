# `dataAwsccBedrockEnforcedGuardrailConfigurations` Submodule <a name="`dataAwsccBedrockEnforcedGuardrailConfigurations` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurations <a name="DataAwsccBedrockEnforcedGuardrailConfigurations" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_enforced_guardrail_configurations awscc_bedrock_enforced_guardrail_configurations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

dataawsccbedrockenforcedguardrailconfigurations.NewDataAwsccBedrockEnforcedGuardrailConfigurations(scope Construct, id *string, config DataAwsccBedrockEnforcedGuardrailConfigurationsConfig) DataAwsccBedrockEnforcedGuardrailConfigurations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig">DataAwsccBedrockEnforcedGuardrailConfigurationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig">DataAwsccBedrockEnforcedGuardrailConfigurationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfigurations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

dataawsccbedrockenforcedguardrailconfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

dataawsccbedrockenforcedguardrailconfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

dataawsccbedrockenforcedguardrailconfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

dataawsccbedrockenforcedguardrailconfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBedrockEnforcedGuardrailConfigurations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBedrockEnforcedGuardrailConfigurations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBedrockEnforcedGuardrailConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/bedrock_enforced_guardrail_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockEnforcedGuardrailConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockEnforcedGuardrailConfigurationsConfig <a name="DataAwsccBedrockEnforcedGuardrailConfigurationsConfig" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbedrockenforcedguardrailconfigurations"

&dataawsccbedrockenforcedguardrailconfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockEnforcedGuardrailConfigurations.DataAwsccBedrockEnforcedGuardrailConfigurationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



