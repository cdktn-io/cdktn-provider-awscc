# `dataAwsccBillingconductorCustomLineItem` Submodule <a name="`dataAwsccBillingconductorCustomLineItem` Submodule" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBillingconductorCustomLineItem <a name="DataAwsccBillingconductorCustomLineItem" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_custom_line_item awscc_billingconductor_custom_line_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItem(scope Construct, id *string, config DataAwsccBillingconductorCustomLineItemConfig) DataAwsccBillingconductorCustomLineItem
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig">DataAwsccBillingconductorCustomLineItemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig">DataAwsccBillingconductorCustomLineItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItem_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItem_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItem_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItem_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBillingconductorCustomLineItem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBillingconductorCustomLineItem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBillingconductorCustomLineItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_custom_line_item#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBillingconductorCustomLineItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.associationSize">AssociationSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingGroupArn">BillingGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingPeriodRange">BillingPeriodRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference">DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.computationRule">ComputationRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.customLineItemChargeDetails">CustomLineItemChargeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.presentationDetails">PresentationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference">DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.productCode">ProductCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList">DataAwsccBillingconductorCustomLineItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AssociationSize`<sup>Required</sup> <a name="AssociationSize" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.associationSize"></a>

```go
func AssociationSize() *f64
```

- *Type:* *f64

---

##### `BillingGroupArn`<sup>Required</sup> <a name="BillingGroupArn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingGroupArn"></a>

```go
func BillingGroupArn() *string
```

- *Type:* *string

---

##### `BillingPeriodRange`<sup>Required</sup> <a name="BillingPeriodRange" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.billingPeriodRange"></a>

```go
func BillingPeriodRange() DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference">DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference</a>

---

##### `ComputationRule`<sup>Required</sup> <a name="ComputationRule" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.computationRule"></a>

```go
func ComputationRule() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `CustomLineItemChargeDetails`<sup>Required</sup> <a name="CustomLineItemChargeDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.customLineItemChargeDetails"></a>

```go
func CustomLineItemChargeDetails() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PresentationDetails`<sup>Required</sup> <a name="PresentationDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.presentationDetails"></a>

```go
func PresentationDetails() DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference">DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference</a>

---

##### `ProductCode`<sup>Required</sup> <a name="ProductCode" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.productCode"></a>

```go
func ProductCode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tags"></a>

```go
func Tags() DataAwsccBillingconductorCustomLineItemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList">DataAwsccBillingconductorCustomLineItemTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItem.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBillingconductorCustomLineItemBillingPeriodRange <a name="DataAwsccBillingconductorCustomLineItemBillingPeriodRange" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange {

}
```


### DataAwsccBillingconductorCustomLineItemConfig <a name="DataAwsccBillingconductorCustomLineItemConfig" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/billingconductor_custom_line_item#id DataAwsccBillingconductorCustomLineItem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails {

}
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat {

}
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters {

}
```


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage {

}
```


### DataAwsccBillingconductorCustomLineItemPresentationDetails <a name="DataAwsccBillingconductorCustomLineItemPresentationDetails" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemPresentationDetails {

}
```


### DataAwsccBillingconductorCustomLineItemTags <a name="DataAwsccBillingconductorCustomLineItemTags" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

&dataawsccbillingconductorcustomlineitem.DataAwsccBillingconductorCustomLineItemTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference <a name="DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod">ExclusiveEndBillingPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod">InclusiveStartBillingPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange">DataAwsccBillingconductorCustomLineItemBillingPeriodRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusiveEndBillingPeriod`<sup>Required</sup> <a name="ExclusiveEndBillingPeriod" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.exclusiveEndBillingPeriod"></a>

```go
func ExclusiveEndBillingPeriod() *string
```

- *Type:* *string

---

##### `InclusiveStartBillingPeriod`<sup>Required</sup> <a name="InclusiveStartBillingPeriod" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.inclusiveStartBillingPeriod"></a>

```go
func InclusiveStartBillingPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemBillingPeriodRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemBillingPeriodRange">DataAwsccBillingconductorCustomLineItemBillingPeriodRange</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue">ChargeValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChargeValue`<sup>Required</sup> <a name="ChargeValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.chargeValue"></a>

```go
func ChargeValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlat</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get"></a>

```go
func Get(index *f64) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute">Attribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues">AttributeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption">MatchOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attribute"></a>

```go
func Attribute() *string
```

- *Type:* *string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.attributeValues"></a>

```go
func AttributeValues() *[]*string
```

- *Type:* *[]*string

---

##### `MatchOption`<sup>Required</sup> <a name="MatchOption" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.matchOption"></a>

```go
func MatchOption() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFilters</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat">Flat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters">LineItemFilters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage">Percentage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Flat`<sup>Required</sup> <a name="Flat" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.flat"></a>

```go
func Flat() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsFlatOutputReference</a>

---

##### `LineItemFilters`<sup>Required</sup> <a name="LineItemFilters" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.lineItemFilters"></a>

```go
func LineItemFilters() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsLineItemFiltersList</a>

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.percentage"></a>

```go
func Percentage() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetails</a>

---


### DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference <a name="DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources">ChildAssociatedResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue">PercentageValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildAssociatedResources`<sup>Required</sup> <a name="ChildAssociatedResources" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.childAssociatedResources"></a>

```go
func ChildAssociatedResources() *[]*string
```

- *Type:* *[]*string

---

##### `PercentageValue`<sup>Required</sup> <a name="PercentageValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.percentageValue"></a>

```go
func PercentageValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage">DataAwsccBillingconductorCustomLineItemCustomLineItemChargeDetailsPercentage</a>

---


### DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference <a name="DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails">DataAwsccBillingconductorCustomLineItemPresentationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemPresentationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemPresentationDetails">DataAwsccBillingconductorCustomLineItemPresentationDetails</a>

---


### DataAwsccBillingconductorCustomLineItemTagsList <a name="DataAwsccBillingconductorCustomLineItemTagsList" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBillingconductorCustomLineItemTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBillingconductorCustomLineItemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBillingconductorCustomLineItemTagsOutputReference <a name="DataAwsccBillingconductorCustomLineItemTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbillingconductorcustomlineitem"

dataawsccbillingconductorcustomlineitem.NewDataAwsccBillingconductorCustomLineItemTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBillingconductorCustomLineItemTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags">DataAwsccBillingconductorCustomLineItemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBillingconductorCustomLineItemTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBillingconductorCustomLineItem.DataAwsccBillingconductorCustomLineItemTags">DataAwsccBillingconductorCustomLineItemTags</a>

---



