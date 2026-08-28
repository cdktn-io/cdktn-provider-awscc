# `dataAwsccRoute53RecoverycontrolSafetyRule` Submodule <a name="`dataAwsccRoute53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRule <a name="DataAwsccRoute53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRule(scope Construct, id *string, config DataAwsccRoute53RecoverycontrolSafetyRuleConfig) DataAwsccRoute53RecoverycontrolSafetyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolSafetyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule">AssertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn">ControlPanelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule">GatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig">RuleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn">SafetyRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssertionRule`<sup>Required</sup> <a name="AssertionRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule"></a>

```go
func AssertionRule() DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `ControlPanelArn`<sup>Required</sup> <a name="ControlPanelArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```go
func ControlPanelArn() *string
```

- *Type:* *string

---

##### `GatingRule`<sup>Required</sup> <a name="GatingRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule"></a>

```go
func GatingRule() DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RuleConfig`<sup>Required</sup> <a name="RuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```go
func RuleConfig() DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `SafetyRuleArn`<sup>Required</sup> <a name="SafetyRuleArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```go
func SafetyRuleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags"></a>

```go
func Tags() DataAwsccRoute53RecoverycontrolSafetyRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

&dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule {

}
```


### DataAwsccRoute53RecoverycontrolSafetyRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

&dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#id DataAwsccRoute53RecoverycontrolSafetyRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

&dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule {

}
```


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

&dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig {

}
```


### DataAwsccRoute53RecoverycontrolSafetyRuleTags <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

&dataawsccroute53recoverycontrolsafetyrule.DataAwsccRoute53RecoverycontrolSafetyRuleTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">AssertedControls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssertedControls`<sup>Required</sup> <a name="AssertedControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```go
func AssertedControls() *[]*string
```

- *Type:* *[]*string

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```go
func WaitPeriodMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">GatingControls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">TargetControls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">WaitPeriodMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GatingControls`<sup>Required</sup> <a name="GatingControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```go
func GatingControls() *[]*string
```

- *Type:* *[]*string

---

##### `TargetControls`<sup>Required</sup> <a name="TargetControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```go
func TargetControls() *[]*string
```

- *Type:* *[]*string

---

##### `WaitPeriodMs`<sup>Required</sup> <a name="WaitPeriodMs" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```go
func WaitPeriodMs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">Inverted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Inverted`<sup>Required</sup> <a name="Inverted" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```go
func Inverted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsList <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53RecoverycontrolSafetyRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoverycontrolsafetyrule"

dataawsccroute53recoverycontrolsafetyrule.NewDataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoverycontrolSafetyRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a>

---



