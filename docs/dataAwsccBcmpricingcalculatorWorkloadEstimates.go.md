# `dataAwsccBcmpricingcalculatorWorkloadEstimates` Submodule <a name="`dataAwsccBcmpricingcalculatorWorkloadEstimates` Submodule" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBcmpricingcalculatorWorkloadEstimates <a name="DataAwsccBcmpricingcalculatorWorkloadEstimates" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcmpricingcalculator_workload_estimates awscc_bcmpricingcalculator_workload_estimates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

dataawsccbcmpricingcalculatorworkloadestimates.NewDataAwsccBcmpricingcalculatorWorkloadEstimates(scope Construct, id *string, config DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig) DataAwsccBcmpricingcalculatorWorkloadEstimates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig">DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig">DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorWorkloadEstimates resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

dataawsccbcmpricingcalculatorworkloadestimates.DataAwsccBcmpricingcalculatorWorkloadEstimates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

dataawsccbcmpricingcalculatorworkloadestimates.DataAwsccBcmpricingcalculatorWorkloadEstimates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

dataawsccbcmpricingcalculatorworkloadestimates.DataAwsccBcmpricingcalculatorWorkloadEstimates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

dataawsccbcmpricingcalculatorworkloadestimates.DataAwsccBcmpricingcalculatorWorkloadEstimates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBcmpricingcalculatorWorkloadEstimates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBcmpricingcalculatorWorkloadEstimates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBcmpricingcalculatorWorkloadEstimates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/bcmpricingcalculator_workload_estimates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBcmpricingcalculatorWorkloadEstimates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig <a name="DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbcmpricingcalculatorworkloadestimates"

&dataawsccbcmpricingcalculatorworkloadestimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBcmpricingcalculatorWorkloadEstimates.DataAwsccBcmpricingcalculatorWorkloadEstimatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



