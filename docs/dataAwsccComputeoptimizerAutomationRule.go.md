# `dataAwsccComputeoptimizerAutomationRule` Submodule <a name="`dataAwsccComputeoptimizerAutomationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccComputeoptimizerAutomationRule <a name="DataAwsccComputeoptimizerAutomationRule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/computeoptimizer_automation_rule awscc_computeoptimizer_automation_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRule(scope Construct, id *string, config DataAwsccComputeoptimizerAutomationRuleConfig) DataAwsccComputeoptimizerAutomationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig">DataAwsccComputeoptimizerAutomationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccComputeoptimizerAutomationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccComputeoptimizerAutomationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccComputeoptimizerAutomationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/computeoptimizer_automation_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccComputeoptimizerAutomationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration">OrganizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes">RecommendedActionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision">RuleRevision</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.criteria"></a>

```go
func Criteria() DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference">DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.lastUpdatedTimestamp"></a>

```go
func LastUpdatedTimestamp() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OrganizationConfiguration`<sup>Required</sup> <a name="OrganizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.organizationConfiguration"></a>

```go
func OrganizationConfiguration() DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference">DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference</a>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `RecommendedActionTypes`<sup>Required</sup> <a name="RecommendedActionTypes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.recommendedActionTypes"></a>

```go
func RecommendedActionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `RuleRevision`<sup>Required</sup> <a name="RuleRevision" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleRevision"></a>

```go
func RuleRevision() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.schedule"></a>

```go
func Schedule() DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference">DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tags"></a>

```go
func Tags() DataAwsccComputeoptimizerAutomationRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList">DataAwsccComputeoptimizerAutomationRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccComputeoptimizerAutomationRuleConfig <a name="DataAwsccComputeoptimizerAutomationRuleConfig" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/computeoptimizer_automation_rule#id DataAwsccComputeoptimizerAutomationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccComputeoptimizerAutomationRuleCriteria <a name="DataAwsccComputeoptimizerAutomationRuleCriteria" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteria {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegion <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegion" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag {

}
```


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded {

}
```


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration {

}
```


### DataAwsccComputeoptimizerAutomationRuleSchedule <a name="DataAwsccComputeoptimizerAutomationRuleSchedule" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleSchedule {

}
```


### DataAwsccComputeoptimizerAutomationRuleTags <a name="DataAwsccComputeoptimizerAutomationRuleTags" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

&dataawscccomputeoptimizerautomationrule.DataAwsccComputeoptimizerAutomationRuleTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGib</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeType</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavings</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDays</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib">EbsVolumeSizeInGib</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings">EstimatedMonthlySavings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays">LookBackPeriodInDays</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region">Region</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn">ResourceArn</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded">RestartNeeded</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsVolumeSizeInGib`<sup>Required</sup> <a name="EbsVolumeSizeInGib" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeSizeInGib"></a>

```go
func EbsVolumeSizeInGib() DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeSizeInGibList</a>

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList">DataAwsccComputeoptimizerAutomationRuleCriteriaEbsVolumeTypeList</a>

---

##### `EstimatedMonthlySavings`<sup>Required</sup> <a name="EstimatedMonthlySavings" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.estimatedMonthlySavings"></a>

```go
func EstimatedMonthlySavings() DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList">DataAwsccComputeoptimizerAutomationRuleCriteriaEstimatedMonthlySavingsList</a>

---

##### `LookBackPeriodInDays`<sup>Required</sup> <a name="LookBackPeriodInDays" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.lookBackPeriodInDays"></a>

```go
func LookBackPeriodInDays() DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList">DataAwsccComputeoptimizerAutomationRuleCriteriaLookBackPeriodInDaysList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.region"></a>

```go
func Region() DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList">DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceArn"></a>

```go
func ResourceArn() DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList</a>

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.resourceTag"></a>

```go
func ResourceTag() DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList</a>

---

##### `RestartNeeded`<sup>Required</sup> <a name="RestartNeeded" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.restartNeeded"></a>

```go
func RestartNeeded() DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteria">DataAwsccComputeoptimizerAutomationRuleCriteria</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaRegionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRegion">DataAwsccComputeoptimizerAutomationRuleCriteriaRegion</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArnOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceArn</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTagOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag">DataAwsccComputeoptimizerAutomationRuleCriteriaResourceTag</a>

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeededOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded">DataAwsccComputeoptimizerAutomationRuleCriteriaRestartNeeded</a>

---


### DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds">AccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder">RuleApplyOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.accountIds"></a>

```go
func AccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `RuleApplyOrder`<sup>Required</sup> <a name="RuleApplyOrder" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.ruleApplyOrder"></a>

```go
func RuleApplyOrder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration">DataAwsccComputeoptimizerAutomationRuleOrganizationConfiguration</a>

---


### DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes">ExecutionWindowInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionWindowInMinutes`<sup>Required</sup> <a name="ExecutionWindowInMinutes" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.executionWindowInMinutes"></a>

```go
func ExecutionWindowInMinutes() *f64
```

- *Type:* *f64

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleSchedule">DataAwsccComputeoptimizerAutomationRuleSchedule</a>

---


### DataAwsccComputeoptimizerAutomationRuleTagsList <a name="DataAwsccComputeoptimizerAutomationRuleTagsList" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccComputeoptimizerAutomationRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get"></a>

```go
func Get(index *f64) DataAwsccComputeoptimizerAutomationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccComputeoptimizerAutomationRuleTagsOutputReference <a name="DataAwsccComputeoptimizerAutomationRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccomputeoptimizerautomationrule"

dataawscccomputeoptimizerautomationrule.NewDataAwsccComputeoptimizerAutomationRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccComputeoptimizerAutomationRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccComputeoptimizerAutomationRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccComputeoptimizerAutomationRule.DataAwsccComputeoptimizerAutomationRuleTags">DataAwsccComputeoptimizerAutomationRuleTags</a>

---



