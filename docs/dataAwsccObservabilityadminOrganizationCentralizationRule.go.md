# `dataAwsccObservabilityadminOrganizationCentralizationRule` Submodule <a name="`dataAwsccObservabilityadminOrganizationCentralizationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccObservabilityadminOrganizationCentralizationRule <a name="DataAwsccObservabilityadminOrganizationCentralizationRule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRule(scope Construct, id *string, config DataAwsccObservabilityadminOrganizationCentralizationRuleConfig) DataAwsccObservabilityadminOrganizationCentralizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig">DataAwsccObservabilityadminOrganizationCentralizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig">DataAwsccObservabilityadminOrganizationCentralizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccObservabilityadminOrganizationCentralizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccObservabilityadminOrganizationCentralizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccObservabilityadminOrganizationCentralizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList">DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.rule"></a>

```go
func Rule() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a>

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.tags"></a>

```go
func Tags() DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList">DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccObservabilityadminOrganizationCentralizationRuleConfig <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleConfig" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_organization_centralization_rule#id DataAwsccObservabilityadminOrganizationCentralizationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccObservabilityadminOrganizationCentralizationRuleRule <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRule {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration {

}
```


### DataAwsccObservabilityadminOrganizationCentralizationRuleTags <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleTags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

&dataawsccobservabilityadminorganizationcentralizationrule.DataAwsccObservabilityadminOrganizationCentralizationRuleTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern">LogGroupNamePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNamePattern`<sup>Required</sup> <a name="LogGroupNamePattern" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern"></a>

```go
func LogGroupNamePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy">EncryptionConflictResolutionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScope">EncryptionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy">EncryptionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConflictResolutionStrategy`<sup>Required</sup> <a name="EncryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy"></a>

```go
func EncryptionConflictResolutionStrategy() *string
```

- *Type:* *string

---

##### `EncryptionScope`<sup>Required</sup> <a name="EncryptionScope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionScope"></a>

```go
func EncryptionScope() *string
```

- *Type:* *string

---

##### `EncryptionStrategy`<sup>Required</sup> <a name="EncryptionStrategy" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy"></a>

```go
func EncryptionStrategy() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration">LogGroupNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration">LogsEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a>

---

##### `LogGroupNameConfiguration`<sup>Required</sup> <a name="LogGroupNameConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration"></a>

```go
func LogGroupNameConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a>

---

##### `LogsEncryptionConfiguration`<sup>Required</sup> <a name="LogsEncryptionConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration"></a>

```go
func LogsEncryptionConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration">DestinationLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration">DestinationMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `DestinationLogsConfiguration`<sup>Required</sup> <a name="DestinationLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration"></a>

```go
func DestinationLogsConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a>

---

##### `DestinationMetricsConfiguration`<sup>Required</sup> <a name="DestinationMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration"></a>

```go
func DestinationMetricsConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRule">DataAwsccObservabilityadminOrganizationCentralizationRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination"></a>

```go
func Destination() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source"></a>

```go
func Source() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRule">DataAwsccObservabilityadminOrganizationCentralizationRuleRule</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration">SourceLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration">SourceMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SourceLogsConfiguration`<sup>Required</sup> <a name="SourceLogsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration"></a>

```go
func SourceLogsConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a>

---

##### `SourceMetricsConfiguration`<sup>Required</sup> <a name="SourceMetricsConfiguration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration"></a>

```go
func SourceMetricsConfiguration() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSource</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria">DataSourceSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy">EncryptedLogGroupStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria">LogGroupSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceSelectionCriteria`<sup>Required</sup> <a name="DataSourceSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria"></a>

```go
func DataSourceSelectionCriteria() *string
```

- *Type:* *string

---

##### `EncryptedLogGroupStrategy`<sup>Required</sup> <a name="EncryptedLogGroupStrategy" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy"></a>

```go
func EncryptedLogGroupStrategy() *string
```

- *Type:* *string

---

##### `LogGroupSelectionCriteria`<sup>Required</sup> <a name="LogGroupSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria"></a>

```go
func LogGroupSelectionCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria">MetricsSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsSelectionCriteria`<sup>Required</sup> <a name="MetricsSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria"></a>

```go
func MetricsSelectionCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">DataAwsccObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.get"></a>

```go
func Get(index *f64) DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference <a name="DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadminorganizationcentralizationrule"

dataawsccobservabilityadminorganizationcentralizationrule.NewDataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTags">DataAwsccObservabilityadminOrganizationCentralizationRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminOrganizationCentralizationRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminOrganizationCentralizationRule.DataAwsccObservabilityadminOrganizationCentralizationRuleTags">DataAwsccObservabilityadminOrganizationCentralizationRuleTags</a>

---



