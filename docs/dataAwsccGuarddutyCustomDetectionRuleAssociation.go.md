# `dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule <a name="`dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociation <a name="DataAwsccGuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.NewDataAwsccGuarddutyCustomDetectionRuleAssociation(scope Construct, id *string, config DataAwsccGuarddutyCustomDetectionRuleAssociationConfig) DataAwsccGuarddutyCustomDetectionRuleAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig">DataAwsccGuarddutyCustomDetectionRuleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGuarddutyCustomDetectionRuleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```go
func Tags() DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationConfig <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

&dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_custom_detection_rule_association#id DataAwsccGuarddutyCustomDetectionRuleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyCustomDetectionRuleAssociationTags <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

&dataawsccguarddutycustomdetectionruleassociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.NewDataAwsccGuarddutyCustomDetectionRuleAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccguarddutycustomdetectionruleassociation"

dataawsccguarddutycustomdetectionruleassociation.NewDataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGuarddutyCustomDetectionRuleAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a>

---



